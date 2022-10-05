require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "mumba",
  networks: {
    mumba: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey]
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey]
    }
  },
};
