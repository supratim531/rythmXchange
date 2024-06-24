import React from "react";
import useMetaMaskAuth from "../hooks/useMetaMaskAuth";
import { useSelector } from "react-redux";

const Header = () => {
  const { wallet } = useSelector((state) => state.auth);
  const connectWallet = useMetaMaskAuth();

  return (
    <div className="App font-[Roboto]">
      {!wallet && (
        <button
          onClick={connectWallet}
          className="bg-blue-600 px-6 py-3 rounded text-white"
        >
          Connect
        </button>
      )}
      {wallet && <div>Connected Wallet: {wallet}</div>}
    </div>
  );
};

export default Header;
