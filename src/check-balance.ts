import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

const pubKey = new PublicKey('4zhwujqqg5WMftkPFQjJB2Dh3cpY4HPub2JtAG7L1htw');

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

await connection.getBalance(pubKey)
  .then((res) => {
    const balanceInSol = res / LAMPORTS_PER_SOL;
    console.log(
      `💰 Finished! The balance for the wallet at address ${pubKey} is ${balanceInSol}!`);
  })
  .catch((err) => console.log(err.message, 'Such an address can not be recognized'));
