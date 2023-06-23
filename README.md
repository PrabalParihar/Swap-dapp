# Swap dApp

This project is a tutorial on building a React dApp that allows users to swap ETH for UNI tokens using Uniswap's smart contracts. The tutorial utilizes the Uniswap SDK to interact with the contracts and create a custom frontend for token swapping.

## Prerequisites

Before starting this tutorial, make sure you have the following knowledge and tools:

* npm
* React
* ethers.js
* wagmi.sh

## Installation and Setup

1. Create a new React dApp project using TypeScript template:
   
   ` npx create-react-app Swap-dapp --template typescript`

2. Change the directory to the project folder:
   
  ` cd Swap-dapp`

4. Install the required dependencies:
   
  ` npm install ethers wagmi @uniswap/v3-sdk @uniswap/sdk-core`


6. Start the development server:

  ` npm start`

  

# Wallet Connection

To connect the dApp with an Ethereum node and enable wallet integration with MetaMask, follow these steps:

1. Open the `App.tsx` file and wrap the entire application with the `WagmiConfig` provider, providing the necessary configuration options.

2. Implement the wallet connection button and logic in the header of the dApp by creating a new `Header` component.

# Fetching Spot Prices

To fetch token prices and interact with the Uniswap contracts, create a custom hook called `useSwap`:

1. Obtain a reference to the contract of the desired token pool (e.g., WETH-UNI).

2. Define the interfaces (`Immutables` and `State`) representing the on-chain pool data.

3. Create functions (`getPoolImmutables` and `getPoolState`) to fetch the required data from the pool contract.

4. Implement the `getQuote` function to calculate the amount of UNI tokens for a given amount of ETH.

5. Build the UI components (`SwapCard`) that call the `getQuote` function and display the quote accordingly.

# Convert ETH to WETH and Approve Spending

Before executing the token swap, it's necessary to convert ETH to WETH and approve the router contract to use WETH on behalf of the user. Follow these steps:

1. Create a new file called `useWETH.tsx` and implement a custom React hook similar to `useSwap`.

2. Instantiate the contract instance for the WETH token and define the necessary functions (`deposit` and `approve`) to convert ETH to WETH and grant permission for router contract access.

# Execute the Swap

To execute the token swap using the Uniswap router contract, follow these steps:

1. Add the required import statements to the `useSwap.tsx` file.

2. Update the hook to use a signer instead of a provider for the router contract and import the functions from the `useWETH` hook.

3. Implement the `swap` function that executes the swap by converting ETH to WETH, approving router access, and calling the `exactInputSingle` function on the router contract.

4. Integrate the `swap` function into the UI by adding the necessary logic and a button in the `SwapCard.tsx` component.

# Display Current Balances

To display the current ETH and UNI token balances, follow these steps:

1. Add the required constant at the top of the `SwapCard.tsx` file.

2. Implement the `useAccount` hook to fetch and watch the account balance for both tokens.

3. Update the template to display the current balance for each token.

- Testing and Usage

Make sure to thoroughly test the functionality of the dApp on the Goerli testnet and provide detailed documentation and instructions for setup and usage.
