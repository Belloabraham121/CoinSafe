// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
import { Button } from "./ui/button";
import SavingOption from "./Modals/SavingOption";
import { useState } from "react";
import Deposit from "./Modals/Deposit";
// import { getBalance } from "viem/actions";
// import { useAccount, useWriteContract } from 'wagmi';
// import coinSafeAbi from '../abi/coinsafe.json';
// import { createPublicClient } from "viem";
// import { CoinSafeContract } from "@/lib/contract";

export default function WalletBalance() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  const openDepositModal = () => setIsDepositModalOpen(true);

  const openFirstModal = () => setIsFirstModalOpen(true);

  // const { address, isConnected } = useAccount();
  // const { data: hash, writeContract } = useWriteContract();

  // const client = createPublicClient({
  //   chain: mainnet,
  //   transport: http(),
  // })
  // const balance = await getBalance(client, {
  //   address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  // })

  // async function submit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault()
  //   const formData = new FormData(e.target as HTMLFormElement)
  //   const tokenId = formData.get('tokenId') as string
  //   writeContract({
  //     address: `0x${CoinSafeContract.address}`,
  //     abi:coinSafeAbi,
  //     functionName: 'depositToPool',
  //     args: [BigInt(tokenId)],
  //   })
  // }

  return (
    <div className="bg-black text-white p-6 flex flex-col ">
      <div className="">
        {/* Network Selector */}
        {/* 
        <Select>
          <SelectTrigger className="w-[140px] bg-gray-700 border-0 bg-[#1E1E1E99] text-white rounded-[2rem]">
            <div className="flex items-center">
              <SelectValue placeholder="All networks" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ripple">
              <div className="flex items-center space-x-2">
                <p>Ripple</p>
              </div>
            </SelectItem>
            <SelectItem value="bitcoin">Bitcoin</SelectItem>
            <SelectItem value="ethereum">Ethereum</SelectItem>
          </SelectContent>
        </Select> */}
      </div>

      {/* Wallet Balance Information */}
      <div className="flex-grow flex flex-col sm:flex-row items-center justify-between">
        {/* Main content */}
        <main className="flex flex-col sm:flex-row items-center sm:space-x-12 my-6 space-y-6 sm:space-y-0">
          {/* Total Wallet Balance */}
          <div className="text-center sm:text-left">
            <p className="text-[#CACACA] text-sm">Total wallet balance</p>
            <p className="text-2xl font-bold text-[#F1F1F1]">
              $6,456.98 <span className="text-xs font-[300]">USD</span>
            </p>
            <p className="text-[#7F7F7F] text-xs">sum of all balances</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block border-l border-gray-600 h-20"></div>

          {/* Available Balance */}
          <div className="text-left">
            <p className="text-[#CACACA] text-sm">Available balance</p>
            <p className="text-2xl font-bold text-[#F1F1F1]">
              $6,456.98 <span className="text-xs font-[300]">USD</span>
            </p>
            <p className="text-[#7F7F7F] text-xs flex items-center justify-center sm:justify-start space-x-1">
              <div className="bg-[#79E7BA] h-[0.6rem] w-1 rounded-xl"></div>
              <span>15%</span> of total wallet balance
            </p>
          </div>
        </main>

        {/* Action Buttons */}
        <div className="flex flex-row  space-x-4">
          <Button className="bg-[#1E1E1E99] hover:bg-[#1E1E1E99] text-white px-6 py-2 rounded-full">
            Withdraws
          </Button>
          <Button
            onClick={openDepositModal}
            className="bg-[#1E1E1E99] hover:bg-[#1E1E1E99] text-white px-6 py-2 rounded-full">
            Deposit
          </Button>
          <Button
            onClick={openFirstModal}
            className="bg-[#FFFFFFE5] hover:bg-[#FFFFFFE5] text-black px-6 py-2 rounded-full">
            Save
          </Button>
        </div>
      </div>

      {/* SavingOption Modal */}
      <SavingOption
        isFirstModalOpen={isFirstModalOpen}
        setIsFirstModalOpen={setIsFirstModalOpen}
        isSecondModalOpen={isSecondModalOpen}
        setIsSecondModalOpen={setIsSecondModalOpen}
      />

      {/* deposit Modal */}
      <Deposit
        isDepositModalOpen={isDepositModalOpen}
        setIsDepositModalOpen={setIsDepositModalOpen}
        onBack={() => {}}
      />
    </div>
  );
}
