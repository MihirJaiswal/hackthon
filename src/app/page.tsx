import Hero from "@/components/Hero";
import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";

export default function Home() {
  return (
   <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <HomeHeader/>
    <Hero/>
   </div>
  );
}
