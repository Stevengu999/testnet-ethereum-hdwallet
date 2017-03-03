var fs = require("fs");

var hdkey = require('ethereumjs-wallet/hdkey');
var Wallet = require('ethereumjs-wallet');
var bip39 = require("bip39");

console.log("Creating a HD key from mnemonic!");

// Read mnemonic
var mnemonic_json = fs.readFileSync("secret.json");
var mnemonic = JSON.parse(mnemonic_json).mnemonic;

console.log("Mnemonic: ", mnemonic);
var hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));

// Get the first account using the standard hd path.
var wallet_hdpath = "m/44'/60'/0'/0/";
var wallet = hdwallet.derivePath(wallet_hdpath + "0").getWallet();

console.log("Address: ", wallet.getAddressString());
console.log("PrivateKey: ", wallet.getPrivateKeyString());

module.exports = {
  wallet: wallet,
  mnemonic: mnemonic
};
