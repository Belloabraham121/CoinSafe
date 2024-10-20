import { useCallback, useEffect, useState } from "react";
import { useAccount, useWriteContract } from 'wagmi';
import { readContract, waitForTransactionReceipt } from '@wagmi/core';
import { getUserTxCount } from "@/lib";
import { toast } from "@/hooks/use-toast";
import GeneratingCredScoreModal from "./Modals/GeneratingCredScoreModal";
import { UserScoreContract, CredScoreNftContract, CoinSafeContract, tokens } from "@/lib/contract";
import { config } from "@/lib/config";
import CredScoreModal from "./Modals/CredScoreModal";

const CredScoreCard = () => {
    const { address } = useAccount();
    const { writeContractAsync } = useWriteContract();
    const [minting, setMinting] = useState(false);
    const [minted, setMinted] = useState(false);
    const [credScoreGenerated, setCredScoreGenerated] = useState(false);
    const [mintTxnHash, setMintTxnHash] = useState("");
    const [isCalculatingCredScore, setIsCalculatingCredScore] = useState(false);
    const [credScore, setCredScore] = useState<number>(0);

    const fetchCredScore = useCallback(async () => {
        const savedAmount = await readContract(config, {
            abi: CredScoreNftContract.abi,
            address: CredScoreNftContract.address as `0x${string}`,
            functionName: 'getUserScore',
            args: [address]
        })

        return savedAmount;
    }, [address])

    const generateCredScore = async () => {
        console.log("generating cred score!...")
        if(!address) return toast({title: "No account connected", description: "Please connect your account to generate your cred score!", variant: "destructive"});
        setIsCalculatingCredScore(true);

        console.log("generating cred score!...")
        try {
            console.log("txCount starting backend transaction call from generating cred score!...")
            const txCount = await getUserTxCount(address);
            console.log("txCount gotten from generating cred score!...")
            const savedAmount = await readContract(config, {
                abi: CoinSafeContract.abi.abi,
                address: CoinSafeContract.address as `0x${string}`,
                functionName: 'totalAmountSaved',
                args: [address, tokens.safu]
            })

            // const platformTxCount = await readContract(config, {
            //     abi: CoinSafeContract.abi.abi,
            //     address: CoinSafeContract.address as `0x${string}`,
            //     functionName: 'userTransactions',
            //     args: [address]
            // }) as any[]

            const genCredScoreTx = await writeContractAsync({
                abi: UserScoreContract.abi,
                address: UserScoreContract.address as `0x${string}`,
                functionName: "updateScore",
                args: [address, txCount, savedAmount, 0]
            })

            const transactionReceipt = await waitForTransactionReceipt(config, {
                hash: genCredScoreTx
            });

            if(transactionReceipt.status === "success") {
                setIsCalculatingCredScore(false);
                setCredScoreGenerated(true);
                return toast({title: "On Chain credit score generated successfully"});
            }
            
            setIsCalculatingCredScore(false);
            return toast({title: "Transaction failed", description: "Unable to generate your on chain credit score!", variant: "destructive"});
        } catch (error) {
           console.error(error); 
           setIsCalculatingCredScore(false);
           return toast({title: "Transaction failed", description: "Unable to generate your on chain credit score!", variant: "destructive"});
        }
    }

    const handleMint = async () => {
        setMinting(true);
        try {
            const mintCredScoreNFTTx = await writeContractAsync({
                abi: CredScoreNftContract.abi,
                address: CredScoreNftContract.address as `0x${string}`,
                functionName: "mint",
                args: [address]
            })
    
            const transactionReceipt = await waitForTransactionReceipt(config, {
                hash: mintCredScoreNFTTx
            });
    
            if(transactionReceipt.status === "success") {
                setMinting(false);
                setMinted(true);
                setMintTxnHash(mintCredScoreNFTTx);
                return toast({title: "Minted onchain score NFT successfully"});
            }
            
            setMinting(false);
            return toast({title: "Transaction failed", description: "Unable to MINT your on chain credit score NFT!", variant: "destructive"});
        } catch(error) {
            console.error(error);
            setMinting(false);
            return toast({title: "Transaction failed", description: "Unable to MINT your on chain credit score NFT!", variant: "destructive"});
        }
    }

    const handleViewNft = async () => {
        if(!credScore) return toast({title: "Invalid Cred Score", variant: "destructive"});

        setCredScoreGenerated(true);

        const userNftBalance = await readContract(config, {
            abi: CredScoreNftContract.abi,
            address: CredScoreNftContract.address as `0x${string}`,
            functionName: "balanceOf",
            args: [address]
        })

        if(Number(userNftBalance) > 0) setMinted(true);
    } 

    useEffect(() => {
        async function run() {
            const credScore = await fetchCredScore();
            console.log(credScore);
            if(Number(credScore)) setCredScore(Number(credScore));
        }

        if(address || credScoreGenerated){
            run();
        }
    }, [address, credScoreGenerated])

  return (
    <div className='border-[1px] border-[#FFFFFF17] rounded-[12px] p-6 w-full'>
        <div className='flex justify-between items-center pb-4'>
            <div className='text-[#CACACA] font-light'>Base cred score</div>
        </div>
        <div>
            <span className='text-[#F1F1F1] pr-2'>
                {credScore || 0}/100
            </span>
        </div>
        <div>
            <div className='pt-2'>
                <p className='text-[#7F7F7F] text-xs'>
                    {}
                    <span className='cursor-pointer text-[#79E7BA] underline' onClick={credScore ? handleViewNft : generateCredScore}>{credScore ? "view nft" : "generate credscore"}</span>
                </p>
            </div>
        </div>
        {isCalculatingCredScore && (
            <GeneratingCredScoreModal
                isOpen={isCalculatingCredScore}
                onClose={() => {}}
            />
        )}
        {/* {canMint && (
            <GeneratingCredScoreModal
                isOpen={isCalculatingCredScore}
                onClose={() => {}}
            />
        )} */}
        {credScoreGenerated && (
            <CredScoreModal
                isOpen={credScoreGenerated && !!credScore}
                onClose={()=> setCredScoreGenerated(false)}
                score={credScore || 0}
                handleMint={handleMint}
                isMinting={minting}
                isSuccess={minted}
                tnxhash={mintTxnHash}            
            />
        )}
    </div>
  )
}

export default CredScoreCard