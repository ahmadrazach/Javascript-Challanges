// import { Connection } from '@metaplex/js'
// const Connection=require("@metaplex/js");
import 'reflect-metadata';
import { Connection } from '@metaplex/js'
// const Account=require("@metaplex-foundation/mpl-core");
// const Metadata=require("@metaplex-foundation/mpl-token-metadata");
import { Account } from '@metaplex-foundation/mpl-core'
import { Metadata } from '@metaplex-foundation/mpl-token-metadata'


const connection = new Connection('mainnet-beta')
const tokenAddress = 'EXNKF3EgXFhJYmgAGnHYx9D3xX9QUZZXWs1iDQK5uQ4T'

const getMetadata = async () => {
  const metadataPDA = await Metadata.getPDA(tokenAddress)
  const mintAccInfo = await connection.getAccountInfo(metadataPDA)

  const {
    data: { data: metadata },
  } = Metadata.from(new Account(tokenAddress, mintAccInfo))

  console.log(metadata)
}

getMetadata()
