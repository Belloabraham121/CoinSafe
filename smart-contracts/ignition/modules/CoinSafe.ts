import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CoinsafeModule = buildModule("CoinsafeModule", (m) => {

  const erc20TokenAddress = m.getParameter("_erc20TokenAddress", "0x5dEaC602762362FE5f135FA5904351916053cF70");
  const sawiTokenAddress = m.getParameter("_sawiTokenAddress", "0x2C0457F82B57148e8363b4589bb3294b23AE7625");
  const safuTokenAddress = m.getParameter("_safuTokenAddress", "0xA1103E6490ab174036392EbF5c798C9DaBAb24EE");
  

  const safeCoin = m.contract("Savings", [erc20TokenAddress, sawiTokenAddress, safuTokenAddress]);

  return { safeCoin };
});

export default CoinsafeModule;