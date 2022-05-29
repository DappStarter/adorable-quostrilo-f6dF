require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remind concert hunt option broken square'; 
let testAccounts = [
"0x8a501af3f2453ac73f747285b885edab0c817ff70bf796e27278e40123ea237b",
"0xa3966e894e8bc5822e2bcda203f7caa8b2c1a3c65d8d1d682b0b90b316b58bce",
"0x21b12c535839beebd5de3b3f9a46be5eb2967d6e494c8eb1fac03cd6d14749d0",
"0x5063cd0b07d60f9b8adf57c8a3d5e2252135c56462802d406b065351b0afd94b",
"0x69ee816b8575ae83fb62e076c57f1d129fe73c025f598546c3574a8a65c1b28c",
"0xc3d42719f953117ad44f36774194567e3e09f39ddac4907632276a044b64f1c4",
"0x978d07906613be3aedeef825adee36384689e379538f9d6f280f200a7e5b3089",
"0x4594a7821bed643fc2a0bd69bb67db6517c3a880e974998883d1cf1db109feca",
"0xc8bc0c38c3cb797a17610d5b8a6f0191fcef30181f4ec5cffdb28430d5438a26",
"0x5f12dfa95c7a4e333b99f071c1ef9e8b87df0538f036e295f503cbb24eb2cb11"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


