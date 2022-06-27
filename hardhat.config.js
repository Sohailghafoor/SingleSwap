require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

const INFURA_API_KEY = "3b2dad5f4a7f44cd9d85b2f41cb9b842";
const ROPSTEN_PRIVATE_KEY =
  "e6471b44975f63f53a1cd6b6d1ceeb2657139c9a1395091f4474017c6b4f71c7";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.3"
      },
      {
        version: "0.7.5"
      },
      {
        version: "0.8.5"
      }

     
    ]
  },
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    // ehterscan API key, obtain from etherscan.io. allow us to connect with our ether scan account.
    apiKey: "27GY3QA4QHPSWIU759AHMYIP96PI2HAEUZ",
  },
};