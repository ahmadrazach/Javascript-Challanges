# 🌅 Script to update Solana NFT Token Metadata

This script updates existing NFTs (replaces json metadata) created with Candy Machine v1 on the blockchain with updated metadata.
It have 2 commands: `download-meta` current metadata and `update` with new metadata.

## Demo

https://user-images.githubusercontent.com/188568/139542417-c687d6e8-8d55-4761-be23-5e5efba69e70.mp4

Script logs all failed tokens in case of any, so you can retry upload them separately. Also, it do update retry with some sleep time in case of fail.
By default it suppose to update tokens in the list between 0 and 10k. you can edit specific range [at this line](https://github.com/thuglabs/token-metadata-update/blob/master/src/index.ts#L177). Also, you can set to update single token [here](https://github.com/thuglabs/token-metadata-update/blob/master/src/index.ts#L174).

## Prepare

Install dependencies.

```
yarn
```

Set your Candy Machine ID within: `src/constans.ts`.

**Note:** For my case, it was verified creatorId which I used while creating NFTs through candy machine.


## Get all of your mint ids.

Place all your tokens addresses (mint id) as string array to the`./src/data/token-list-to-parse.json`.

If you've created your NFTs through candy machine, you can list all your mint ids for a collection by running below command:

```
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts get_all_mint_addresses -k <PATH_TO_LOCAL_KEYPAIR> -c <NAME_OF_COLLECTION>
```

## Download current meta.

You need download existing metadata for further reuse on `update` command. Run

```
yarn download-metadata
```

It will get array of tokens from `./src/data/token-list-to-parse.json` and fetch all metadata to the file `src/data/current-metadata-cache.json` (may take ~1hr for 1k items).

In addition of fetching all the metadata, It'll also update your metaData written in  `src/data/current-metadata-cache.json` to the your requirenments, like it'll detect number in the name and add a space and a hash (#) before that number. like `Ghost Guy99` will become `Ghost Guy #99`

## Create new updated metadata on Arweave.

It can be done with `metaplex upload` same as when creating new candy machine.
Tip: You can upload to devnet with same result, arweave links will be still valid.
Otherwise newly updated links need to be formated to format of `metaplex` cache file.
Put cache file into -> `./src/data/mainnet-beta-temp.json`

## Update metadata for tokens

Place `mainnet-beta-temp.json` into `./src/data/`.

Local keypair should be the same as keypair used to create related Candy Machine, and assumed to be an `Update Authority` for each token in the list.
Default `env` is `devnet

```
yarn run update --keypair <PATH_TO_LOCAL_KEYPAIR> --env devnet
```
