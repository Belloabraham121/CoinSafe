import faucetAbi from "../abi/faucet.json";
import coinSafeAbi from "../abi/coinsafe.json";
import userScoreAbi from '../abi/onchainscore.json';
import credScoreAbi from '../abi/credit-score-nft.json';

export const tokens = {
  usdt: "0xd26be7331edd458c7afa6d8b7fcb7a9e1bb68909",
  safu: "0xA1103E6490ab174036392EbF5c798C9DaBAb24EE",
};

export const CoinSafeContract = {
  address: "0xfBF2a9f8ffab5a8ED186151d9CFa360911Abd6Fd",
  abi: coinSafeAbi,
};

export const FaucetContract = {
  address: "0xE9b224bE25B2823250f4545709A11e8ebAC18b34",
  abi: faucetAbi,
};

export const UserScoreContract = {
  address: "0x12ccF0F4A22454d53aBdA56a796a08e93E947256",
  abi: userScoreAbi.abi,
}

export const CredScoreNftContract = {
  address: "0x4d0884D03f2fA409370D0F97c6AbC4dA4A8F03d6",
  abi: credScoreAbi.abi,
}

// 0x311F1D1e9668537F3be7e212813eF9eEb076817E
// pre address -- 0x6330605C037437270aab6526263595c2297E4B5E
