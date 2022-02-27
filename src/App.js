import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);
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

  async function connect() {
    try {
      if (typeof window.ethereum === "undefined") {
      }
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [ALFAJORES_PARAMS],
      });
    } catch (error) {
      if (error.code === 4001)
        alert("Please connect to MetaMask to continue !");
      else console.error(error);
    }
  }

  return (
    <div className="App">
      {metamaskInstalled === true ? (
        <button onClick={connect}>Connect</button>
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
}

export default App;
