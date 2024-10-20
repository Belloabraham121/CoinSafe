import { useState } from "react";
import MemoSmile from "@/icons/Smile";
import MemoSmile2 from "@/icons/Smile2";
import MemoAngry2 from "@/icons/Angry2";
import MemoAngry from "@/icons/Angry";
import { useAccount } from "wagmi";
import CustomConnectButton from "./custom-connect-button";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import { Basenames } from "./basenames";

export default function SmileFace() {
  const { isConnected, address } = useAccount();
  const [isHovered, setIsHovered] = useState(false);
  const { openAccountModal } = useAccountModal();

  return (
    <div className="flex items-center sm:space-x-3">
      {/* Button for connected wallets */}
      <div>
        {isConnected && address ? (
          <div onClick={openAccountModal ? () => openAccountModal() : () => {}} className="cursor-pointer"> 
            <Basenames address={address}/>
          </div>
        ) : (
          <CustomConnectButton />
        )}
      </div>
      {/* Icon with hover effect */}
      {isConnected ? (
        <div
          className={`cursor-pointer rounded-full  transition-all duration-1000 ease-in-out ${
            isHovered ? "shadow-lg shadow-[#7AE7BA]" : "shadow-none"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {isHovered ? (
            <MemoSmile2 className="w-12 h-12 transition-all duration-1000" />
          ) : (
            <MemoSmile className="w-12 h-12 transition-all duration-1000" />
          )}
        </div>
      ) : (
        <div
          className={`cursor-pointer rounded-full  transition-all duration-1000 ease-in-out ${
            isHovered ? "shadow-lg shadow-[#FF484B85]" : "shadow-none"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {isHovered ? (
            <MemoAngry2 className="w-12 h-12 transition-all duration-1000" />
          ) : (
            <MemoAngry className="w-12 h-12 transition-all duration-1000" />
          )}
        </div>
      )}
    </div>
  );
}
