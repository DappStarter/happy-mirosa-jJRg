require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strategy regret situate unveil gentle light army giant'; 
let testAccounts = [
"0x4db3c3a458aa0d7c9973471b62c99d8940f8e7ba070a856e3203376809653854",
"0x48e05f8a8eb863755fa540bccaaff7deefd4ca5a48468038e368235f80413aa3",
"0xf1481e057df8647bc9a7a477842852e9c61ab9c5cac30cc8f2aeaf5842b6aa15",
"0x0457f729a502e8c70a43b3f53bb9c812cb7b4f79152dbea0827790101675ba75",
"0xb822bbebd744681bd1a43e3e437078de2b31bbc89515944fbe23a99561a778f1",
"0x5ef1aa0ad3a0d112c2e4839c308f23ef273bd41afa3f503d8f81b9cb5621415f",
"0x647dff5d5ed2ae7dbf92bc9f16c4aaf80771b49a6f5e4cae39a21df6778219d9",
"0xd3fc1857f957a554dc761e84b7042026033e07a499d31184693a4f8ada6743d0",
"0xa828f3406718bf4b068938d66419876fb3d4cbd32235682935c057ce97d23ab9",
"0x97a1067014ccdb179f6aa15bbdc0a657a06a0a873ae106ef2ef580709642336b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

