import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-orange-100 to-yellow-100 w-full h-auto flex flex-col items-center justify-center p-20 gap-5">
      <h2 className="text-4xl font-extrabold">Hoii</h2>
      <Button>Click</Button>
    </div>
  );
}
