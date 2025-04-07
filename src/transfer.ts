import { Connection, Transaction, SystemProgram, sendAndConfirmTransaction, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import * as dotenv from 'dotenv';
import { getKeypairFromEnvironment } from '@solana-developers/helpers';

dotenv.config();

const pubkey = new PublicKey(getKeypairFromEnvironment('SECRET_KEY').publicKey);
const connection = new Connection('https://api.devnet.solana.com', 'confirmed')
console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`
);
const latestBlockHash = await connection.getLatestBlockhash()
const transaction = new Transaction(latestBlockHash);

const LAMPORTS_TO_SEND = 5000;
const toPubkey = new PublicKey('8ATvWd1cqQoeTA1YY9VnqAEWXnK82pWcnmYyQbNVyGtJ');

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: pubkey,
  toPubkey: toPubkey,
  lamports: LAMPORTS_TO_SEND
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(
  connection, transaction, [getKeypairFromEnvironment('SECRET_KEY')]
);

console.log(`Transaction signature is ${signature}!`);