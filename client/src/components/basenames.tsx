"use client";

import { Avatar, Identity, Name, Address } from "@coinbase/onchainkit/identity";
import { baseSepolia } from "viem/chains";

interface DisplayBasenameProps {
  address: `0x${string}` | undefined;
}

export function Basenames({ address }: DisplayBasenameProps) {  
  return (
    <Identity
      address={address}
      // @ts-expect-error  This is necessary due to TypeScript inference limitations
      chain={baseSepolia}
      schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
      className="w-full relative"
    >
      <Avatar 
        address={address} 
        // @ts-expect-error  This is necessary due to TypeScript inference limitations
        chain={baseSepolia} 
      />
      <Name 
        address={address}
        // @ts-expect-error  This is necessary due to TypeScript inference limitations 
        chain={baseSepolia} 
        className="truncate w-full text-blue-400"
      />
      <Address />
    </Identity>
  );
}