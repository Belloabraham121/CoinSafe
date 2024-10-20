import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenFaucetModule = buildModule("TokenFaucetModule", (m) => {

  const erc20TokenAddress = m.getParameter("_tokenAddress", "0xA1103E6490ab174036392EbF5c798C9DaBAb24EE");

  const faucetContract = m.contract("TokenFaucet", [erc20TokenAddress]);

  return { faucetContract };
});

export default TokenFaucetModule;
