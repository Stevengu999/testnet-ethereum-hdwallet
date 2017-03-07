# Component to control test ethereum wallet
## Description
Uses node.js and HD-mnemonic wallet.
You should have a *secret.json* file with 12-word mnemonic.

Format for *secret.json* file:
`{
  "mnemonic": "<12 words of mnemonic>"
}`


It will be used to create an Ethereum wallet.

## Installation
Run `npm install testnet_ethereum_hdwallet` to install this package.

## Usage

`node wallet.js` will send an address and private key associated with mnemonic in *secret.json*.
