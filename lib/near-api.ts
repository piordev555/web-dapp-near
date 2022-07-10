import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';

import { getConfig } from '../config/near';

const nearConfig = getConfig(process.env.NODE_ENV || 'development');

// Initializing contract
export async function initContract() {
  // get network configuration values from config.js
  // based on the network ID we pass to getConfig()
  const nearConfig = getConfig(process.env.NEAR_ENV || 'testnet');

  // create a keyStore for signing transactions using the user's key
  // which is located in the browser local storage after user logs in
  const keyStore = new keyStores.BrowserLocalStorageKeyStore();

  // Initializing connection to the NEAR testnet
  const near = await connect({ keyStore, ...nearConfig });

  // Initialize wallet connection
  const walletConnection = new WalletConnection(near, 'catch');

  // Load in user's account data
  let currentUser;

  if (walletConnection.getAccountId()) {
    currentUser = {
      // Gets the accountId as a string
      accountId: walletConnection.getAccountId(),
      // Gets the user's token balance
      balance: (await walletConnection.account().state()).amount,
    };
  }

  // Initializing our contract APIs by contract name and configuration
  const contract = await new Contract(walletConnection.account(), nearConfig.contractName, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['check_token'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['nft_mint'],
  });

  return { contract, currentUser, nearConfig, walletConnection };
}
