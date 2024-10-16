import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
  AreaChart,
  Area,
} from "recharts";
import SavingOption from "./Modals/SavingOption";
import { Button } from "./ui/button";
import Deposit from "./Modals/Deposit";
import coinSafeAbi from "../abi/coinsafe.json";
// import { CoinSafeContract } from "@/lib/contract";
import { useAccount, useReadContract } from "wagmi";

import { getLskToUsd, getSafuToUsd, getUsdtToUsd } from "@/lib";

import { CoinSafeContract, tokens } from "@/lib/contract";
import { formatUnits } from "viem";
import { getValidNumberValue } from "@/lib/utils";
// import { injected } from "wagmi/connectors";
// import { liskSepolia } from "viem/chains";
// import { erc20Abi } from "viem";

const TrackingChart = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const { isConnected, address } = useAccount();
  const [savingsBalance, setSavingsBalance] = useState<any>();
  const [availableBalance, setAvailableBalance] = useState<
    number | null | undefined
  >(0);

  const TotalSavingsBalance = useReadContract({
    abi: coinSafeAbi.abi,
    address: CoinSafeContract.address as `0x${string}`,
    functionName: "getTotalSavingsBalance",
    args: [address],
  });

  const AvailableBalance = useReadContract({
    abi: coinSafeAbi.abi,
    address: CoinSafeContract.address as `0x${string}`,
    functionName: "getAvailableBalances",
    args: [address],
  });

  useEffect(() => {
    async function run() {
      if (AvailableBalance.data) {
        // console.log("Available Balance", AvailableBalance.data);
        let lskVal = 0,
          safuVal = 0,
          usdtVal = 0;

        for (let balance of AvailableBalance.data as any[]) {
          if (balance.token === tokens.usdt) {
            // console.log("USDT", balance, balance.balance);
            usdtVal = (await getUsdtToUsd(
              Number(formatUnits(balance.balance, 6))
            )) as number;
          }

          if (balance.token === tokens.safu) {
            // console.log("SAFU", balance, balance.balance);
            safuVal = getSafuToUsd(Number(formatUnits(balance.balance, 18)));
          }

          if (balance.token === tokens.lsk) {
            // console.log("LSK", balance, balance.balance);
            lskVal = (await getLskToUsd(
              Number(formatUnits(balance.balance, 18))
            )) as number;
          }
        }
        setAvailableBalance(
          getValidNumberValue(lskVal) +
            getValidNumberValue(usdtVal) +
            getValidNumberValue(safuVal)
        );
        // console.log("Available balance: ", lskVal + usdtVal + safuVal);
        // setAvailableBalance(AvailableBalance);
      }
      if (AvailableBalance.error) {
        // console.log(AvailableBalance.error);
        // setAvailableBalance(AvailableBalance);
      }

      if (TotalSavingsBalance.data) {
        // console.log("Total Savings Plan", TotalSavingsBalance.data);
        setSavingsBalance(TotalSavingsBalance.data);
      }

      if (TotalSavingsBalance.error) {
        // console.log(TotalSavingsBalance.error);
        // setSavingsBalance(TotalSavingsBalance)
      }

      // console.log(TotalSavingsBalance.status);
      // console.log(TotalSavingsBalance);
    }
    run();
  }, [AvailableBalance, TotalSavingsBalance]);
  // const result = useReadContracts({
  //   contracts: [
  //     {
  //       abi: coinSafeAbi.abi,
  //       address: CoinSafeContract.address as `0x${string}`,
  //       functionName: 'getUserBalances',
  //       args: [
  //         address
  //       ]
  //     }
  //   ]

  // })

  // const {data:balance, isError, isLoading } = useBalance({ address: result?.data[0].result[0]?.token as `0x${string}`})

  // console.log(balance);

  const openFirstModal = () => setIsFirstModalOpen(true);
  const openDepositModal = () => setIsDepositModalOpen(true);

  const data = [
    {
      date: "10/12/2024",
      uv: 0,
      pv: 2400,
      amt: 2400,
    },
    {
      date: "10/12/2024",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      date: "10/12/2024",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      date: "10/12/2024",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      date: "10/12/2024",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      date: "10/12/2024",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      date: "10/12/2024",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="w-full border-[1px] border-[#FFFFFF17] p-6 rounded-[12px]">
      <div className="w-full">
        <div className="flex justify-end items-center pb-10 text-white">
          {/* <div className="rounded-[100px] px-3 py-[6px] bg-[#1E1E1E99]">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm flex items-center outline-none">
                <div>All Networks</div>
                <div>
                  <MdArrowDropDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div> */}
          <div className="flex items-center gap-2">
            <Button
              onClick={openDepositModal}
              className="rounded-[100px] px-8 py-2  bg-[#1E1E1E99] text-sm cursor-pointer"
            >
              Deposit
            </Button>
            <Button
              onClick={openFirstModal}
              className="rounded-[100px] px-8 py-2  bg-[#FFFFFFE5] hover:bg-[#FFFFFFE5] text-[#010104] text-sm"
            >
              Save
            </Button>
          </div>
        </div>

        <div className="sm:flex justify-between pb-6 border-b-[1px] border-[#FFFFFF17]">
          {/* Total wallet balance */}
          <div className="mb-6 sm:mb-0">
            <div className="text-[#CACACA] font-light text-sm pb-4">
              Total wallet balance
            </div>
            <div>
              <span className="text-[#F1F1F1] text-3xl pr-2">
                $
                {isConnected
                  ? availableBalance
                    ? availableBalance?.toFixed(2)
                    : "0.00"
                  : "0.00"}
              </span>
              <span className="text-[#CACACA] font-light text-xs">USD</span>
            </div>
            <div className="text-xs pt-2">
              <span className="text-[#48FF91]">+18%</span>
              <span className="text-[#7F7F7F] ml-1">24h</span>
            </div>
          </div>

          {/* Vault balance */}
          <div className="border-x-[1px] border-[#FFFFFF17] px-4 sm:px-[150px] mb-6 sm:mb-0">
            <div className="text-[#CACACA] font-light text-sm pb-4">
              Vault balance
            </div>
            <div>
              <span className="text-[#F1F1F1] text-3xl pr-2">
                ${isConnected ? savingsBalance ?? "0.00" : "0.00"}
              </span>
              <span className="text-[#CACACA] font-light text-xs">USD</span>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <div className="bg-[#79E7BA] w-[4px] h-[13px] rounded-[5px]"></div>
              <span className="text-[#7F7F7F] text-xs">
                67% of total wallet balance
              </span>
            </div>
          </div>

          {/* Available balance */}
          <div>
            <div className="text-[#CACACA] font-light text-sm pb-4">
              Available balance
            </div>
            <div>
              <span className="text-[#F1F1F1] text-3xl pr-2">
                $
                {isConnected
                  ? (availableBalance || 0 - savingsBalance || 0)?.toFixed(2) ??
                    "0.00"
                  : "0.00"}
              </span>
              <span className="text-[#CACACA] font-light text-xs">USD</span>
            </div>
            <div className="sm:flex items-center gap-2 pt-2">
              <div className="bg-[#79E7BA] w-[4px] h-[13px] rounded-[5px]"></div>
              <span className="text-[#7F7F7F] text-xs">
                15% of total wallet balance
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[160px]">
        {isConnected && (
          <>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="100%" stopColor="#114124" stopOpacity={1} />
                    <stop offset="100%" stopColor="#030B06" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  tick={false}
                  axisLine={{ stroke: "#000000" }}
                  padding={{ left: -70, right: -20 }}
                />
                <YAxis
                  tick={false}
                  padding={{ top: 0, bottom: -40 }}
                  axisLine={{ stroke: "#000000" }}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#00C750"
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </>
        )}
      </div>

      {/* SavingOption Modal */}
      <SavingOption
        isFirstModalOpen={isFirstModalOpen}
        setIsFirstModalOpen={setIsFirstModalOpen}
        isSecondModalOpen={isSecondModalOpen}
        setIsSecondModalOpen={setIsSecondModalOpen}
      />
      <Deposit
        isDepositModalOpen={isDepositModalOpen}
        setIsDepositModalOpen={setIsDepositModalOpen}
        onBack={() => {}}
      />
    </div>
  );
};

export default TrackingChart;
