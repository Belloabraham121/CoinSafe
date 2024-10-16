import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { CardContent } from "./ui/card";
import MemoAvax from "@/icons/Avax";
import MemoCheckIcon from "@/icons/CheckIcon";
import MemoXmarkIcon from "@/icons/XmarkIcon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allAssets, Asset } from "@/lib/data";
import { useAccount, useReadContract } from "wagmi";
import { CoinSafeContract } from "@/lib/contract";import { useEffect } from "react";

export default function AssetTable() {
  const liquidAssets = allAssets.filter((asset) => asset.liquid);
  const stakedAssets = allAssets.filter((asset) => asset.staked);
  const savedAssets = allAssets.filter((asset) => asset.saved);
  const { address } = useAccount();

  const TokenBalances = useReadContract({
    abi: CoinSafeContract.abi.abi,
    address: CoinSafeContract.address as `0x${string}`,
    functionName: "getUserBalances",
    args: [address],
  });

  useEffect(() => {
    console.log(TokenBalances);
  });

  return (
    <div className="bg-[#010104] border border-[#13131373] overflow-hidden p-4 rounded-[2rem] text-white w-full">
      <div className="sm:mx-auto">
        <h1 className="text-xl font-semibold mb-4">Assets</h1>

        {/* Tabs Component */}
        <Tabs defaultValue="all-assets" className="w-full">
          <TabsList className="sm:flex space-x-4 hidden bg-[#1E1E1E99] rounded-[2rem] p-2 mb-4">
            <TabsTrigger
              value="all-assets"
              className="text-white px-4 py-2 rounded-full">
              All assets
            </TabsTrigger>
            <TabsTrigger
              value="liquid-assets"
              className="text-white px-4 py-2 rounded-full">
              Liquid assets
            </TabsTrigger>
            <TabsTrigger
              value="staked-assets"
              className="text-white px-4 py-2 rounded-full">
              Staked assets
            </TabsTrigger>
            <TabsTrigger
              value="saved-assets"
              className="text-white px-4 py-2 rounded-full">
              Saved assets
            </TabsTrigger>
          </TabsList>

          {/* Tab Content for All Assets */}
          <TabsContent value="all-assets">
            <AssetTableContent assets={allAssets} />
          </TabsContent>

          {/* Tab Content for Liquid Assets */}
          <TabsContent value="liquid-assets">
            <AssetTableContent assets={liquidAssets} />
          </TabsContent>

          {/* Tab Content for Staked Assets */}
          <TabsContent value="staked-assets">
            <AssetTableContent assets={stakedAssets} />
          </TabsContent>

          {/* Tab Content for Saved Assets */}
          <TabsContent value="saved-assets">
            <AssetTableContent assets={savedAssets} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function AssetTableContent({ assets }: { assets: Asset[] }) {
  return (
    <div className="bg-[#010104] w-full p-4 rounded-lg">
      <CardContent>
        <Table className="w-full">
          <TableHeader className="bg-[#1E1E1E99] text-[#CACACA]">
            <TableRow className="w-full">
              <TableHead className="w-1/3">Ticker</TableHead>
              <TableHead className="w-1/3">Amount</TableHead>
              <TableHead className="hidden md:table-cell w-1/3">
                Autosaved
              </TableHead>
              <TableHead className="hidden sm:table-cell w-1/3">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-[#F1F1F1] w-full">
            {assets.map((asset, index) => (
              <TableRow
                key={index}
                className="w-full flex flex-col sm:table-row">
                {/* Ticker */}
                <TableCell className="w-full sm:w-1/3">
                  <div className="flex items-center space-x-4">
                    <MemoAvax className="w-6 h-6" />
                    <div className="flex flex-col">
                      <p className="font-[400] text-base">{asset.symbol}</p>
                      <span className="font-[400] text-xs">{asset.name}</span>
                    </div>
                  </div>
                </TableCell>

                {/* Amount */}
                <TableCell className="w-full sm:w-1/3">
                  <div className="flex flex-col">
                    <p>{asset.amount}</p>
                    <span className="text-xs">{asset.value}</span>
                  </div>
                </TableCell>

                {/* Autosaved column, hidden on smaller screens */}
                <TableCell className="hidden md:table-cell w-1/3">
                  <div className="flex items-center">
                    <span className="mr-2">
                      {asset.autosaved ? "Yes" : "No"}
                    </span>
                    {asset.autosaved ? (
                      <MemoCheckIcon className="text-green-500 w-5 h-5" />
                    ) : (
                      <MemoXmarkIcon className="text-red-500 w-5 h-5" />
                    )}
                  </div>
                </TableCell>

                {/* Actions, hidden on very small screens */}
                <TableCell className="flex justify-start space-x-6 sm:justify-end w-full sm:w-2/3">
                  <Button variant="link" className="text-[#79E7BA]">
                    Deposit
                  </Button>
                  <Button variant="link" className="text-[#79E7BA]">
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </div>
  );
}
