"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function Btn() {
  const words = [
    {
      text: "Check",
    },
    {
      text: "your",
    },
    {
      text: "stress",
    },
    {
      text: "level with",
    },
    {
      text: "Equillibrium",
      className: "text-cyan-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} className="text-white" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border border-white border-transparent text-white text-sm">
         <Link href="/stress/stressmodal">
          click here
         </Link>
        </button>
      </div>
    </div>
  );
}
