import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { deserializeUnchecked, BinaryReader, BinaryWriter, serialize } from 'borsh';
import base58 from 'bs58';
import { Data, METADATA_SCHEMA, Metadata, UpdateMetadataArgs } from './classes';
import { StringPublicKey } from './types';
import { METAPLEX } from '../constants';

export const extendBorsh = () => {
    (BinaryReader.prototype as any).readPubkey = function () {
        const reader = this as unknown as BinaryReader;
        const array = reader.readFixedArray(32);
        return new PublicKey(array);
    };

    (BinaryWriter.prototype as any).writePubkey = function (value: any) {
        const writer = this as unknown as BinaryWriter;
        writer.writeFixedArray(value.toBuffer());
    };

    (BinaryReader.prototype as any).readPubkeyAsString = function () {
        const reader = this as unknown as BinaryReader;
        const array = reader.readFixedArray(32);
        return base58.encode(array) as StringPublicKey;
    };

    (BinaryWriter.prototype as any).writePubkeyAsString = function (value: StringPublicKey) {
        const writer = this as unknown as BinaryWriter;
        writer.writeFixedArray(base58.decode(value));
    };
};

extendBorsh();

export const decodeMetadata = (buffer: Buffer): Metadata => {
    const metadata = deserializeUnchecked(METADATA_SCHEMA, Metadata, buffer) as Metadata;

    metadata.data.name = metadata.data.name.replace(/\0/g, '');
    metadata.data.symbol = metadata.data.symbol.replace(/\0/g, '');
    metadata.data.uri = metadata.data.uri.replace(/\0/g, '');
    metadata.data.name = metadata.data.name.replace(/\0/g, '');
    return metadata;
};

export async function updateMetadataInstruction(
    data: Data | undefined,
    newUpdateAuthority: string | undefined,
    primarySaleHappened: boolean | null | undefined,
    mintKey: StringPublicKey,
    updateAuthority: StringPublicKey,
    metadataAccountStr?: StringPublicKey,
): Promise<TransactionInstruction> {
    const metadataProgramId = METAPLEX;
    const metadataAccountKey = metadataAccountStr ? new PublicKey(metadataAccountStr) : undefined;

    const metadataAccount =
        metadataAccountKey ||
        (
            await PublicKey.findProgramAddress(
                [Buffer.from('metadata'), metadataProgramId.toBuffer(), new PublicKey(mintKey).toBuffer()],
                metadataProgramId,
            )
        )[0];

    const value = new UpdateMetadataArgs({
        data,
        updateAuthority: !newUpdateAuthority ? undefined : newUpdateAuthority,
        primarySaleHappened:
            primarySaleHappened === null || primarySaleHappened === undefined ? null : primarySaleHappened,
    });

    // console.log('value for serialize: ', value);

    const txnData = Buffer.from(serialize(METADATA_SCHEMA, value));
    // const txnData = Buffer.from(serialize(schema, value));

    const keys = [
        {
            pubkey: metadataAccount,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: new PublicKey(updateAuthority),
            isSigner: true,
            isWritable: false,
        },
    ];

    const instruction = new TransactionInstruction({
        keys,
        programId: new PublicKey(metadataProgramId),
        data: txnData,
    });

    return instruction;
}
