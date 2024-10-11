import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ProofOfScoreModule = buildModule("ProofOfScoreModule", (m) => {

  const contractAddress = m.getParameter("_userScoreContractAddress", "0x12ccF0F4A22454d53aBdA56a796a08e93E947256");

  const proof = m.contract("CreditScoreNFT", [contractAddress]);

  return { proof };
});

export default ProofOfScoreModule;