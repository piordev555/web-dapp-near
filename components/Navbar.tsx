import * as React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { WalletConnection } from 'near-api-js';
import { LogoutIcon, NearIcon, SettingsIcon, DashboardIcon, ArtIcon, LogoIcon, MenuBarIcon } from './icons';

import { CONTRACT_NAME } from '../config/near';

export default function Navbar(props) {
  const { walletConnection } = props;

  return (
    <nav className="navbar border-b-2 border-lightGrey px-4 py-3 sm:px-6 xs:px-12 flex flex-row  justify-between">
      <button
        className="cursor-pointer"
        onClick={() => {
          walletConnection.signOut();
          Router.push('/');
        }}
      >
        <LogoIcon className="w-9 h-9 sm:w-12 sm:h-12" />
      </button>
      <div className="flex flex-row">
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
          <div className="flex items-center flex-row-reverse md:justify-between md:flex-row md:w-70">
            <div className="hidden items-center gap-3 md:flex">
              <div className="group flex gap-2 cursor-pointer hover:bg-primary rounded-2xl px-4 py-2">
                <DashboardIcon className="group-hover:text-white" />
                <p className="text-black group-hover:text-white">Dashboard</p>
              </div>
              <div className="group flex gap-2 cursor-pointer hover:bg-primary rounded-2xl px-4 py-2">
                <ArtIcon className="group-hover:text-white" />
                <p className="text-black group-hover:text-white">My projects</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-1 xs:gap-3 items-center">
              <p className="text-black">sarunas.near</p>
              <button className="p-2 sm:p-3 xs:p-4 rounded-full border-2 border-lightGrey bg-white hover:bg-lightGrey flex flex-row justify-center items-center">
                <NearIcon className="text-black w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              <button className="group sm:p-3 xs:p-4 rounded-full bg-lightGrey hover:bg-black sm:flex flex-row justify-center items-center hidden">
                <SettingsIcon className="text-black group-hover:text-white" />
              </button>
              <button
                className="group sm:p-3 xs:p-4 rounded-full bg-lightGrey hover:bg-black sm:flex flex-row justify-center items-center hidden"
                onClick={() => walletConnection.requestSignIn(CONTRACT_NAME)}
              >
                <LogoutIcon className="text-black group-hover:text-white" />
              </button>
            </div>
          </div>
        )}
        <button className="ml-4 sm:ml-3 xs:ml-14 md:hidden">
          <MenuBarIcon className="text-black group-hover:text-white w-6 sm:w-8" />
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  walletConnection: PropTypes.instanceOf(WalletConnection),
  user: PropTypes.any,
};
