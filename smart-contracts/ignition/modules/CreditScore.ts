import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CreditScoreModule = buildModule("CreditScoreModule", (m) => {

  const erc20TokenAddress = m.getParameter("_tokenAddress", "0xA1103E6490ab174036392EbF5c798C9DaBAb24EE");
  

  const creditScore = m.contract("UserScore", [erc20TokenAddress]);

  return { creditScore };
});

export default CreditScoreModule;