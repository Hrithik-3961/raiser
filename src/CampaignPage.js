import Web3 from "web3";
import ContractKit from "@celo/contractkit";

const CampaignPage = () => {
  const web3 = new Web3("https://alfajores-forno.celo-testnet.org");
  const kit = ContractKit.newKitFromWeb3(web3);

  async function getBalance() {
    let anAddress = "0xD86518b29BB52a5DAC5991eACf09481CE4B0710d";

    let cUSDtoken = await kit.contracts.getStableToken();
    let cUSDBalance = await cUSDtoken.balanceOf(anAddress);
    console.log(`${anAddress} cUSD balance: ${cUSDBalance.toString()}`);
  }

  return (
    <div>
      <button>Contribute</button>
    </div>
  );
};

export default CampaignPage;
