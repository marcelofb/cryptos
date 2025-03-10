/* import { mount as cryptosMount } from "cryptos/CryptosIndex";
import { mount as walletMount } from "wallet/WalletShow"; */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log("Container");

ReactDOM.render(<App />, document.getElementById("root"));

/* cryptosMount(document.getElementById("mf-cryptos"));
walletMount(document.getElementById("mf-wallet")); */
