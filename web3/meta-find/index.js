// import 'reflect-metadata'
// import { Connection, PublicKey } from '@solana/web3.js'
// import { Metadata } from '@metaplex-foundation/mpl-token-metadata'

// const connection = new Connection('https://api.mainnet-beta.solana.com')

// ;(async () => {
//   let mintPubkey = new PublicKey('9MwGzSyuQRqmBHqmYwE6wbP3vzRBj4WWiYxWns3rkR7A')
//   let tokenmetaPubkey = await Metadata.getPDA(mintPubkey)

//   const tokenmeta = await Metadata.load(connection, tokenmetaPubkey)
//   console.log(tokenmeta)
// })()

import { Metaplex } from '@metaplex-foundation/js'
import { Connection, clusterApiUrl } from '@solana/web3.js'

const connection = new Connection(clusterApiUrl('mainnet-beta'))
const metaplex = new Metaplex(connection)

let mintAddress = '9MwGzSyuQRqmBHqmYwE6wbP3vzRBj4WWiYxWns3rkR7A'

// const getNft async=()=>{
//   const nft = await task.run();
// }

async function getNft() {
  //1-
  // const task = metaplex.nfts().findByMint(mintAddress)

  const nfts = await metaplex.nfts().findAllByCreator(creatorPublicKey).run();
  console.log(task)
  // return nft;
}

getNft()
