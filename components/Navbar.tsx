import * as React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { WalletConnection } from 'near-api-js';
import { LogoutIcon, NearIcon, SettingsIcon, DashboardIcon, ArtIcon, LogoIcon } from './icons';

import { CONTRACT_NAME } from '../config/near';

export default function Navbar(props) {
  const { walletConnection, user } = props;

  return (
    <nav className="navbar border-b-2 border-lightGrey px-12 py-3 flex flex-row items-center gap-32">
      <button
        className="cursor-pointer"
        onClick={() => {
          walletConnection.signOut();
          Router.push('/');
        }}
      >
        <LogoIcon />
      </button>
      {walletConnection.isSignedIn() ? (
        <button
          className="p-4 rounded-full bg-lightGrey hover:bg-white flex flex-row justify-center items-center"
          onClick={() => {
            walletConnection.signOut();
            Router.push('/');
          }}
        >
          <LogoutIcon className="text-black" />
        </button>
      ) : (
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="group flex gap-2 cursor-pointer hover:bg-primary rounded-2xl px-4 py-2">
              <DashboardIcon className="group-hover:text-white" />
              <p className="text-black group-hover:text-white">Dashboard</p>
            </div>
            <div className="group flex gap-2 cursor-pointer hover:bg-primary rounded-2xl px-4 py-2">
              <ArtIcon className="group-hover:text-white" />
              <p className="text-black group-hover:text-white">My projects</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-black">sarunas.near</p>
            <button className="p-4 rounded-full border-2 border-lightGrey bg-white hover:bg-lightGrey flex flex-row justify-center items-center">
              <NearIcon className="text-black hover:text-white" />
            </button>
            <button className="group p-4 rounded-full bg-lightGrey hover:bg-black flex flex-row justify-center items-center">
              <SettingsIcon className="text-black group-hover:text-white" />
            </button>
            <button
              className="group p-4 rounded-full bg-lightGrey hover:bg-black flex flex-row justify-center items-center"
              onClick={() => walletConnection.requestSignIn(CONTRACT_NAME)}
            >
              <LogoutIcon className="text-black group-hover:text-white" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  walletConnection: PropTypes.instanceOf(WalletConnection),
  user: PropTypes.any,
};
