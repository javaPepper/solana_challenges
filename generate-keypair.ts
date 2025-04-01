import { getKeypairFromEnvironment, addKeypairToEnvFile } from '@solana-developers/helpers';
import { Keypair } from '@solana/web3.js';
import * as dotenv from 'dotenv';

dotenv.config();

const keypairInstance = new Keypair({
  publicKey: [
    59, 91, 119, 42, 107, 113, 0, 91, 108, 19, 182, 114, 7,
    82, 111, 236, 167, 47, 43, 213, 239, 92, 110, 166, 179,
    208, 60, 10, 211, 177, 16, 148
  ] as unknown as Uint8Array,
  secretKey: [
    10, 165,  61,  41,  69, 111,  67,  80, 196, 161, 230,
    87,  69,   1, 150, 235,  12,  76, 131, 245,  51,   6,
    11,  98, 207, 196, 152,  74, 126,  13, 118, 124,  59,
    91, 119,  42, 107, 113,   0,  91, 108,  19, 182, 114,
    7,  82, 111, 236, 167,  47,  43, 213, 239,  92, 110,
    166, 179, 208,  60,  10, 211, 177,  16, 148
  ] as unknown as Uint8Array
});

addKeypairToEnvFile(keypairInstance, 'SECRET_KEY')
  .then((_res) => console.log( `✅ Secret key is added to the env file!`,))
  .catch((err) => console.log(err.message));

getKeypairFromEnvironment('SECRET_KEY');
console.log(
  `✅ Secret key is loaded securely, using an env file!`,
);