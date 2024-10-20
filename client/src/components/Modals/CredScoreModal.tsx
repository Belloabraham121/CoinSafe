import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";

export default function CredScoreModal({
  isOpen,
  onClose,
  score,
  handleMint,
  isMinting,
  isSuccess,
  nftCID,
  tnxhash,
}: {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  handleMint: () => {};
  isMinting:boolean;
  isSuccess: boolean;
  nftCID?: string;
  tnxhash: string;
}) {
    
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[360px] p-6 bg-black text-white rounded-lg shadow-lg">
        {!isSuccess ? (
           <div className="flex flex-col items-center space-y-6 text-center">
           {/* Description */}
           <p className="text-center text-lg">
             Your cred score has been generated{" "}
           </p>
 
           <div className="my-8">
             <p className="text-[#20FFAF] font-bold text-4xl">{score}</p>
 
             <p className="text-center text-sm text-gray-400">
               Out of 100
             </p>
           </div>
 
           <p className="">Claim your NFT as a proof of your cred score</p>
           <Button className="text-black bg-white hover:bg-white/90  px-8 rounded-[2rem]" disabled={isMinting} onClick={handleMint}>
             Claim NFT {isMinting && <Loader2 className="ml-1 w-4 h-4 animate-spin"/>}
           </Button>
         </div>
        ) : (
          <div className="">
            <p>NFT Claimed!</p>
            <div className="">
              {nftCID ? (
                <img
                  src={`https://ipfs.io/${nftCID}`}
                  alt="NFT-Image"
                  width={500}
                  height={500}
                  className={"rounded-md w-full min-h-[220px]"}
                />
              ) : (
                <Skeleton className={"rounded-md w-full min-h-[220px]"}/>
              )}
            </div>
            {tnxhash && (<Link to={`https://sepolia.basescan.org/tx/${tnxhash}`} className="text-[#79E7BA] underline">view transaction on explorer</Link>)}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
