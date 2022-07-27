# Update NFT Data

Update the metadata of any NFT

## Required:

1. Wallet key pair having update authoirty in ./configs/wallet.json
2. NFT Mint ID
3. new URI (for dev purposes)

## Setup instructions

- MacOS may need openssl:

```
brew install openssl@3
```

- Install <a href="https://www.rust-lang.org/tools/install"> Rust</a>. (Requires Rust 1.58 or later)

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

- Install or build with Rust

```
cd ./metaboss
cargo install --path ./
```

or

```
cargo build --release
```

- run project by the following command

```
node --experimental-modules app.mjs
```

## Postman settings to check

- give POST request to

```
http://localhost:8000/changedata
```

- Postman/Insomnia:
  - Body Form with following things:
  1.  token
  2.  uri
  - Header
    Content-Type : application/x-www-form-urlencoded
