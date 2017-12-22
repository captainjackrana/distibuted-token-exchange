# Distributed Ethereum Token Exchange 

A fully distributed token exchange that allows you to buy/sell tokens in exchange for ether that runs on the [Rinkeby Ethereum Test Network](rinkeby.io). It applies a Maker/Taker transaction fee model i.e. transaction fee applied only on market orders and not on placing limit orders. The exchange by default supports the **FIXED** token. 
#### Features
  - Deposit/Withdraw ether & tokens 
  - Buy/Sell tokens
  - Create Limit Buy/Sell Orders that can be fulfilled later
  - Exchange Transaction Fee on Market Orders that get fulfilled.
  - Add custom tokens


#### Installation
1. Clone and install the dependencies start the server.

```sh
$ git clone https://github.com/captainjackrana/distibuted-token-exchange.git
$ cd distibuted-token-exchange
$ npm install
$ npm run dev
```

2. Now install MetaMask Chrome Plugin (https://metamask.io/) that will allow your browser to connect to the Distributed Application.
3. Create an account in MetaMask which will give you a specifish hash address. 
4. Switch to the Rinkeby Test Network in MetaMask with your account selected
5. Navigate to http://localhost:8080 and play around!

