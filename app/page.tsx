import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-orange-100 to-yellow-100 w-full h-screen flex flex-col items-center justify-center p-20 gap-5">
      <h2 className="text-4xl font-extrabold">HomePage</h2>
      <Link href={'/dashboard'} >
        <Button>Click</Button>
      </Link>
    </div>
  );
}
