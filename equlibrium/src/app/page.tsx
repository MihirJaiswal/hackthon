import About from "@/components/About";
import Benefits from "@/components/Benefits";
import { Bento } from "@/components/Bento";
import Hero from "@/components/Hero";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import Image from "next/image";
import Addon from "@/components/Addon";

export default function Home() {
  return (
   <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <HomeHeader/>
    <Hero/>
    <Benefits/>
    <Addon/>
    <Bento/>
    <Footer/>
   </div>
  );
}
