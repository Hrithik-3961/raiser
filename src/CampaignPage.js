import Web3 from "web3";
import { useLocation } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ContractKit = require("@celo/contractkit");
const getAccount = require("./getAccount").default.getAccount;

const CampaignPage = () => {
  const web3 = new Web3("https://alfajores-forno.celo-testnet.org");
  const kit = ContractKit.newKitFromWeb3(web3);

  const location = useLocation();
  const percentageRaised = Math.round(
    (location.state.raised / location.state.required) * 100
  );

  async function getBalance() {
    let sendAddress = "0x8443003b51b87cfbd02808b176bdfcac898c3d79";
    let receiveAddress = "0x500fD79EfE859D1A13bc41Fa4E1833e414962B4e";

    let cUSDtoken = await kit.contracts.getStableToken();
    let cUSDSendBalance = await cUSDtoken.balanceOf(sendAddress);
    let cUSDReceiveBalance = await cUSDtoken.balanceOf(receiveAddress);
    console.log(
      `SEND: ${sendAddress} cUSD balance: ${cUSDSendBalance.toString()}`
    );
    console.log(
      `RECEIVE: ${receiveAddress} cUSD balance: ${cUSDReceiveBalance.toString()}`
    );
  }

  async function send() {
    // let account = await getAccount();
    // kit.connection.addAccount(account.privateKey);

    let sendAddress = "0x8443003b51b87cfbd02808b176bdfcac898c3d79";
    let receiveAddress = "0x500fD79EfE859D1A13bc41Fa4E1833e414962B4e";

    let amount = 100000;

    let cUSDtoken = await kit.contracts.getStableToken();
    let cUSDtx = await cUSDtoken
      .transfer(receiveAddress, amount)
      .send({ from: sendAddress, feeCurrency: cUSDtoken.address });
    let cUSDReceipt = await cUSDtx.waitReceipt();
    console.log("cUSD Transaction receipt: %o", cUSDReceipt);

    getBalance();

    // let cUSDBalance = await cUSDtoken.balanceOf(account.address);

    // console.log(`Your new account cUSD balance: ${cUSDBalance.toString()}`);
  }

  getBalance();

  //let anAddress = "0x8443003b51b87cfbd02808b176bdfcac898c3d79";
  //let anAddress = "0xD86518b29BB52a5DAC5991eACf09481CE4B0710d";
  //getBalance(anAddress);

  return (
    <div className={"container"}>
      <h3>{location.state.title}</h3>
      <div className="image">
        <Image src={location.state.imgSrc} rounded style={{ width: "45vw" }} />
      </div>
      <div className="details">
        <div className="progress">
          <CircularProgressbar
            value={percentageRaised}
            text={`${percentageRaised} %`}
            strokeWidth={10}
          />
          <p>
            <span>Raised</span>
            {location.state.raised} of {location.state.required}
          </p>
        </div>
        <Button variant="primary" size="lg" id="donate-btn" onClick={send}>
          Donate Now
        </Button>
      </div>
    </div>
  );
};

export default CampaignPage;
