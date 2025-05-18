import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Section1 from "./LandingPage/Section1";
import Section2 from "./LandingPage/Section2";
import Section3 from "./LandingPage/Section3";
import Section4 from "./LandingPage/Section4";

export default function Home() {
  return (
    <div className=" w-full h-auto flex flex-col items-center justify-center bg-[#F5F5F5] font-gilroy ">

      <nav className="w-[97%] h-20 my-7 p-5 bg-black backdrop-blur-sm rounded-2xl fixed top-0 z-30 flex justify-start items-center gap-10 text-white" >
        <h1 className="text-4xl">InspireAI</h1>
        <h4>Features</h4>
        <h4>Try Now</h4>
        <h4></h4>
        <h4></h4>
      </nav>

      {/* Reveal on scroll and overlap Effect */}
      <div id='reveal-on-scroll-and-overlap' className="w-full h-auto relative">
        <Section1/>
        <Section2/>
      </div>

      <div className="w-full h-auto relative ">
        <Section3/>
        <Section4/>
      </div>
    </div>
  );
}
