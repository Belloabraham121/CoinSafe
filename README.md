# CoinSafe

**CoinSafe** is a decentralized financial ecosystem built on the Base Layer-2 network. The platform aims to help individuals automate savings, optimize financial management, and access personalized investment opportunities in decentralized finance (DeFi). By providing innovative financial tools such as automated savings vaults, synthetic staking rewards, and an onchain credit score system, CoinSafe empowers users to take control of their finances in a secure, transparent, and trustless environment.

## Table of Contents

- [CoinSafe](#coinsafe)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Architecture](#architecture)
  - [Usage](#usage)
  - [Credit Score System](#credit-score-system)
  - [Technologies Used](#technologies-used)
  - [License](#license)

---

## Features

1. **Automated Savings**  
   Users can set savings schedules (daily, monthly, or yearly) and automate transfers from their wallets into dedicated savings vaults.
2. **Spend-to-Save**  
   Every time a user spends tokens, a fraction is automatically saved in their CoinSafe vault, encouraging long-term saving behavior.

3. **Synthetic Staking Rewards**  
   CoinSafe allows users to earn staking rewards on their savings without locking their tokens for long durations.

4. **Onchain Credit Score**  
   Build credit scores based on regular savings. These scores are represented by NFTs that evolve as the user’s score improves.

5. **DeFi Integration**  
   Users can access decentralized financial services such as microloans, staking, and yield farming directly from their CoinSafe accounts.

6. **Transparent & Verifiable**  
   All transactions are stored onchain, ensuring transparency and traceability.

## Architecture

CoinSafe operates on the Base network, leveraging smart contracts and decentralized storage solutions. It is designed to be modular, with the following components:

- **Savings Vaults**: Smart contracts holding user funds.
- **Staking Contracts**: For synthetic rewards.
- **Credit Score NFTs**: Representing users' onchain creditworthiness.
- **Oracles**: For integrating off-chain data when needed.

## Usage

1. **Automated Savings**

   - Users can deposit into their savings vault, set a savings schedule, and view their balance and rewards through the dApp.

2. **Spend-to-Save**

   - Upon executing any transaction via the CoinSafe wallet, a fraction of the transaction will be routed into the user's savings vault automatically.

3. **Credit Score**

   - Users can monitor their credit score in real-time and mint new NFTs whenever their score improves. The NFT dynamically displays the score as an SVG.

4. **Staking**
   - Stake tokens to earn rewards. Rewards accrue based on the amount and time staked without penalization for early withdrawal.

## Credit Score System

CoinSafe introduces an innovative onchain credit score mechanism based on user savings and spending behavior.

- **Credit NFTs**: Credit scores are stored in an NFT. The NFT metadata dynamically updates the score over time.
- **Point System**: Users earn points for regular savings. The higher the points, the better the credit score. Points are recalculated periodically based on savings history.

## Technologies Used

- **Base Network**: L2 scaling solution built on Ethereum.
- **Solidity**: Smart contract language used for creating the CoinSafe contracts.
- **Hardhat**: Development environment for compiling, testing, and deploying smart contracts.
- **React**: Frontend framework for building the CoinSafe dApp.

## License

CoinSafe is open-source and licensed under the [MIT License](LICENSE).
