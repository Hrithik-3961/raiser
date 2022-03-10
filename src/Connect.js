import { useEffect, useState } from "react";

const Connect = () => {
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);

  useEffect(() => {
    if (
      typeof window.ethereum !== "undefined" &&
      typeof window.ethereum._eventsCount !== "undefined"
    ) {
      setMetamaskInstalled(true);
    } else setMetamaskInstalled(false);
  }, []);

  const ALFAJORES_PARAMS = {
    chainId: "0xaef3",
    chainName: "Alfajores Testnet",
    nativeCurrency: { name: "Alfajores Celo", symbol: "A-CELO", decimals: 18 },
    rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
    blockExplorerUrls: ["https://alfajores-blockscout.celo-testnet.org/"],
    iconUrls: ["future"],
  };

  const CUSD_PARAMS = {
    type: "ERC20",
    options: {
      address: "0x874069fa1eb16d44d622f2e0ca25eea172369bc1",
      symbol: "cUSD",
      decimals: 18,
    },
    iconUrls: ["future"],
  };

  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      alert("Please connect to MetaMask to continue !");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      console.log(accounts[0]);
    }
  }

  async function connect() {
    window.ethereum
      .request({
        method: "wallet_addEthereumChain",
        params: [ALFAJORES_PARAMS],
      })
      .then(() => {
        window.ethereum.request({
          method: "wallet_watchAsset",
          params: CUSD_PARAMS,
        });
      })
      .then(() => {
        window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then(handleAccountsChanged);
      })
      .catch((error) => {
        if (error.code === 4001)
          alert("Please connect to MetaMask to continue !");
        else console.error(error);
      });
  }

  return (
    <div>
      {metamaskInstalled === true ? (
        <button onClick={connect} disabled={currentAccount !== null}>
          {currentAccount !== null ? "Connected" : "Connect"}
        </button>
      ) : (
        <p>
          Download and enable{" "}
          <a
            href="https://metamask.io/download/"
            target="_blank"
            rel="noreferrer"
          >
            Metamask
          </a>{" "}
          to proceed
        </p>
      )}
    </div>
  );
};

export default Connect;
