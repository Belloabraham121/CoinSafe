import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SawiModule = buildModule("SawiModule", (m) => {

    const sawierc20 = m.contract("Sawi");

    return { sawierc20 };

});

export default SawiModule;