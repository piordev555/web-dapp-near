import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import type { AppProps } from 'next/app';
import type { Contract, WalletConnection } from 'near-api-js';
import { useState, useEffect } from 'react';

// tailwind
import 'tailwindcss/tailwind.css';

// fonts
import '@fontsource/anton/latin.css';
import '@fontsource/roboto/latin-400.css';
import '@fontsource/roboto/latin-500.css';
import '@fontsource/roboto/latin-700.css';

import Navbar from '../components/Navbar';
import store from '../lib/store';
import { initContract } from '../lib/near-api';

function MyApp({ Component, pageProps }: AppProps) {
  const [contract, setContract] = useState<Contract | null>(null);
  const [nearUser, setNearUser] = useState<any | null>(null);
  const [nearConfig, setNearConfig] = useState<any | null>(null);
  const [walletConnection, setWalletConnection] = useState<WalletConnection | null>(null);

  useEffect(() => {
    initContract().then(({ contract, currentUser, nearConfig, walletConnection }) => {
      setContract(contract);
      setNearUser(currentUser);
      setNearConfig(nearConfig);
      setWalletConnection(walletConnection);
    });
  }, []);

  return (
    <Provider store={store}>
      {walletConnection ? <Navbar walletConnection={walletConnection} user={nearUser} /> : null}
      <Component {...pageProps} />
      <Toaster />
    </Provider>
  );
}

export default MyApp;
