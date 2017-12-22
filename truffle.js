module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4", // Rinkeby ID 4
      from: "0x98781Bd87BbB783AdAdE69f32B3110cC42700AD6",
      gas: 4600000
    }
  }
};
