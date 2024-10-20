import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader } from "lucide-react";

export default function GeneratingCredScoreModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
    
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[360px] p-6 bg-black text-white rounded-lg shadow-lg flex flex-col items-center justify-center">
        <p className="">Generating your cred score...</p>
        <Loader className="w-12 h-12 animate-spin"/>
      </DialogContent>
    </Dialog>
  );
}
