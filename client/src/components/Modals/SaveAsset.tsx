import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import MemoBackIcon from "@/icons/BackIcon";
// import MemoRipple from "@/icons/Ripple";
import MemoCalenderIcon from "@/icons/CalenderIcon";

import { useAccount, useConnect, useWriteContract } from "wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { baseSepolia } from "viem/chains";
import { injected } from "wagmi/connectors";
import { CoinSafeContract, tokens } from "@/lib/contract";
import coinSafeAbi from "../../abi/coinsafe.json";
import { useRecoilState } from "recoil";
import { saveAtom } from "@/store/atoms/save";
import { config } from "@/lib/config";
import SaveSuccessful from "./SaveSuccessful";
// import { set } from "date-fns";

export default function SaveAsset({
  isOpen,
  onClose,
  onBack,
}: {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}) {
  const [selectedOption, setSelectedOption] = useState("manual");
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);

  // to multiply the amount based on selected token's decimals
  const [decimals, setDecimals] = useState(1);

  const [saveState, setSaveState] = useRecoilState(saveAtom);
  const [isLoading, setIsLoading] = useState(false);

  // const handleChange = (event:any) => {
  //   setSaveState((prevState) => ({...prevState, [event.target.name]: event.target.value}));
  // };
  const handleDurationChange = (event: any) => {
    // convert number of days to seconds for smart contract
    let _duration = Number(event.target.value) * 24 * 60 * 60;
    setSaveState((prevState) => ({
      ...prevState,
      [event.target.name]: _duration,
    }));
  };
  const handleAmountChange = (event: any) => {
    let _amount = Number(event.target.value);
    setSaveState((prevState) => ({
      ...prevState,
      [event.target.name]: _amount,
    }));
  };

  // console.log("SAVE::", saveState)

  const { address } = useAccount();

  const { writeContractAsync } = useWriteContract();
  const { connectAsync } = useConnect();

  const handleTokenSelect = (value: string) => {
    // SAFU check
    if (value == tokens.safu) {
      setDecimals(18);
      // USDT check
    } else if (value == tokens.usdt) {
      setDecimals(6);
    }

    setSaveState((prevState) => ({ ...prevState, token: value }));
  };

  const handleTabChange = () => {};

  const handleSaveAsset = async (e: any) => {
    e.preventDefault();

    try {
      if (!address) {
        try {
          await connectAsync({
            chainId: baseSepolia.id,
            connector: injected(),
          });
        } catch (error) {
          alert(error);
        }
      }
      setIsLoading(true);
      console.log("DECIMALS", decimals);
      console.log("AMOUNT", saveState.amount);

      // Step 3: Call save function
      const data = await writeContractAsync({
        chainId: baseSepolia.id,
        address: CoinSafeContract.address as `0x${string}`,
        functionName: "save",
        abi: coinSafeAbi.abi,
        args: [saveState.token, BigInt(saveState.token === tokens.usdt ? saveState.amount * 10 ** 6 : saveState.amount * 10 ** 18), saveState.duration],
      });

      console.log(data);

      const saveTransactionReceipt = await waitForTransactionReceipt(config, {
        hash: data,
      });

      if (saveTransactionReceipt.status === "success") {
        console.log("DATA", data);
        openThirdModal();
      }

      console.log("DATA", saveTransactionReceipt.status);
      setIsLoading(false);
    } catch (error) {
      console.log("ERROR:::", error);
      if((error as any).toString().includes("InsufficientFunds()")) {
        alert("Insufficient Funds, Please deposit enough to be able to save.");
      }
      setIsLoading(false);
    }
  };

  const openThirdModal = () => {
    setIsThirdModalOpen(true);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] border-0 text-white bg-[#09090B]">
        <DialogTitle className="text-white flex items-center space-x-3">
          <MemoBackIcon onClick={onBack} className="w-6 h-6 cursor-pointer" />
          <p>Save your assets</p>
        </DialogTitle>
        <Tabs
          defaultValue="one-time"
          onValueChange={() => handleTabChange()}
          className="w-full"
        >
          <TabsList className="sm:flex space-x-4 text-center justify-between bg-[#1E1E1E99] rounded-[2rem] p-2 mb-4">
            <TabsTrigger
              value="one-time"
              className="flex justify-center rounded-2xl items-center flex-1"
            >
              One-time Save
            </TabsTrigger>
            <TabsTrigger
              value="autosave"
              className="flex justify-center rounded-2xl items-center flex-1"
            >
              Autosave
            </TabsTrigger>
          </TabsList>
          <TabsContent value="one-time">
            <div className="p-8 text-gray-700">
              {/* Amount Section */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex-1">
                  <label htmlFor="amount" className="text-sm text-gray-400">
                    Amount
                  </label>
                  <div className="flex flex-col items-center justify-center">
                    <input
                      type="text"
                      id="amount"
                      name="amount"
                      value={saveState.amount}
                      onChange={handleAmountChange}
                      defaultValue={0}
                      className="bg-transparent text-base font-light text-gray-200 border-none focus:outline-none text-center w-full"
                    />
                    {/* <div className="text-xs text-gray-400 text-center">
                      ≈ $400.56
                    </div> */}
                  </div>
                </div>
                <div className="ml-4">
                  <Select onValueChange={handleTokenSelect}>
                    <SelectTrigger className="w-[140px] bg-gray-700 border-0 bg-[#1E1E1E99] text-white rounded-lg">
                      <div className="flex items-center">
                        {/* <MemoRipple className="mr-2" /> */}
                        <SelectValue placeholder="Select Token" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={tokens.usdt}>
                        <div className="flex items-center space-x-2">
                          <p>USDT</p>
                        </div>
                      </SelectItem>
                      <SelectItem value={tokens.safu}>
                        SAFU
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Wallet Balance Section */}
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-[300] text-gray-300">
                  Wallet balance:{" "}
                  <span className="text-gray-400">3000 XRP</span>
                </div>
                <div className="text-sm text-green-400 cursor-pointer">
                  Save all
                </div>
              </div>

              {/* Duration Section */}
              <div className="space-y-4 py-6 text-white">
                <div className="space-y-2 relative">
                  <Label htmlFor="duration">Duration</Label>
                  <div className="relative">
                    <Input
                      id="duration"
                      // defaultValue="7days"
                      type="number"
                      name="duration"
                      onChange={handleDurationChange}
                      placeholder="Days"
                      className="pl-3 pr-4"
                    />
                    <MemoCalenderIcon className="absolute right-1 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Unlock Date Section */}
              <div className="text-sm text-gray-300">
                Unlocks on 24 Sept, 2024
              </div>
            </div>
          </TabsContent>
          <TabsContent value="autosave">
            <div className="space-y-4 py-4">
              <p className="font-[200] text-base">Choose savings method</p>
              <div className="flex gap-2">
                <Label
                  htmlFor="manual"
                  className="flex items-center gap-2 rounded-md border-0 px-4 py-3 h-24 bg-[#131313B2] text-gray-400"
                >
                  <input
                    type="radio"
                    id="manual"
                    name="savingOption"
                    value="manual"
                    checked={selectedOption === "manual"}
                    onChange={() => setSelectedOption("manual")}
                    className="appearance-none h-4 w-4 border-2 border-gray-400 rounded-full checked:bg-[#79E7BA] checked:border-[#79E7BA] focus:outline-none"
                  />
                  <div className="flex-1 ml-3">
                    <div className="font-medium mb-1">Per transaction</div>
                    <p className="text-xs font-[400] text-muted-foreground">
                      Save a percentage of every transaction
                    </p>
                  </div>
                </Label>
                <Label
                  htmlFor="personalized"
                  className="flex items-center gap-2 rounded-md border-0 px-4 py-3 h-24 bg-[#131313B2] text-gray-400"
                >
                  <input
                    type="radio"
                    id="personalized"
                    name="savingOption"
                    value="personalized"
                    checked={selectedOption === "personalized"}
                    onChange={() => setSelectedOption("personalized")}
                    className="appearance-none h-4 w-4 border-2 border-gray-400 rounded-full checked:bg-[#79E7BA] checked:border-[#79E7BA] focus:outline-none"
                  />
                  <div className="flex-1 ml-3">
                    <div className="font-medium mb-1">By frequency</div>
                    <p className="text-xs font-[400] text-white">
                      Save a fixed amount by frequency
                    </p>
                  </div>
                </Label>
              </div>

              {/* Conditionally Rendered Content */}
              {selectedOption === "manual" && (
                <div className="space-y-4 py-2 text-white">
                  <Label htmlFor="transactionPercentage">
                    Transaction Percentage
                  </Label>
                  <Input
                    id="transactionPercentage"
                    defaultValue="% 20"
                    type="text"
                    placeholder="Percentage"
                    className="pl-3 pr-4"
                  />
                </div>
              )}

              {selectedOption === "personalized" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex-1">
                      <label htmlFor="amount" className="text-sm text-gray-400">
                        Amount
                      </label>
                      <div className="flex flex-col items-center justify-center">
                        <input
                          type="text"
                          id="amount"
                          defaultValue="345,000.67 XRP"
                          className="bg-transparent text-base font-light text-gray-200 border-none focus:outline-none text-center w-full"
                        />
                        <div className="text-xs text-gray-400 text-center">
                          ≈ $400.56
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <Select onValueChange={handleTokenSelect}>
                        <SelectTrigger className="w-[140px] bg-gray-700 border-0 bg-[#1E1E1E99] text-white rounded-lg">
                          <div className="flex items-center">
                            {/* <MemoRipple className="mr-2" /> */}
                            <SelectValue placeholder="Select Token" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0xd26be7331edd458c7afa6d8b7fcb7a9e1bb68909">
                            <div className="flex items-center space-x-2">
                              <p>USDT</p>
                            </div>
                          </SelectItem>
                          <SelectItem value="0xBb88E6126FdcD4ae6b9e3038a2255D66645AEA7a">
                            SAFU
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4 py-2 text-white">
                    <Label htmlFor="frequencyAmount">Frequency</Label>
                    <Select>
                      <SelectTrigger className="w-full bg-gray-700 border bg-transparent  text-white rounded-lg">
                        <div className="flex items-center">
                          <SelectValue placeholder="Monthly" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jan">
                          <div className="flex items-center space-x-2">
                            <p>Jan</p>
                          </div>
                        </SelectItem>
                        <SelectItem value="feb">Feb</SelectItem>
                        <SelectItem value="mar">Mar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Common Duration Section */}
              <div className="space-y-2 relative">
                <Label htmlFor="duration">Duration</Label>
                <div className="relative">
                  <Input
                    id="duration"
                    defaultValue="7 days"
                    type="text"
                    placeholder="Days"
                    className="pl-3 pr-4"
                  />
                  <MemoCalenderIcon className="absolute right-1 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                </div>
                <div className="text-sm text-gray-300">
                  Unlocks on 24 Sept, 2024
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button
            onClick={onClose}
            className="bg-[#1E1E1E99] px-8 rounded-[2rem] hover:bg-[#1E1E1E99]"
            type="submit"
          >
            Cancel
          </Button>
          <div>
            <Button
              onClick={(e) => handleSaveAsset(e)}
              className="text-black px-8 rounded-[2rem]"
              variant="outline"
              disabled={saveState.token == "" || isLoading}
            >
              {isLoading ? "Loading..." : "Save assets"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
      <SaveSuccessful
        amount={saveState.amount}
        token={
          saveState.token == tokens.safu
            ? "SAFU"
            : "USDT"
        }
        duration={saveState.duration}
        isOpen={isThirdModalOpen}
        onClose={() => setIsThirdModalOpen(false)}
      />
    </Dialog>
  );
}
