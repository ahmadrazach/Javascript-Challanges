import requests

response = requests.get(
    "https://api.theblockchainapi.com/v1/solana/nft",
    params={
        'mint_address': 
            '2pQPtnFm2mgXZrVWyNdcf5Qf2TWBGkTAeKZJhPjsc7Jn',
        'network': 'mainnet-beta'
    },
    headers={
        'APISecretKey': 'YOUR SECRET KEY',
        'APIKeyId': 'YOUR KEY ID'
    }
)
print(response.json())