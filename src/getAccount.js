import Web3 from "web3";
import { readFile, writeFile } from "fs";
import { join } from "path";
var web3 = new Web3();

const filePath = join(__dirname, "./.secret");

function getAccount() {
  return new Promise((resolve) => {
    // if (existsSync(filePath)) {
    //   readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    //     resolve(web3.eth.accounts.privateKeyToAccount(data));
    //   });
    // } else {
    let randomAccount = web3.eth.accounts.create();

    writeFile(filePath, randomAccount.privateKey, (err) => {
      if (err) {
        return console.log(err);
      }
    });

    resolve(randomAccount);
    //}
  });
}

export default {
  getAccount,
};
