'use client'
import { HoverEffect } from "./ui/card-hover-effect";

export function Bento() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <h1 className="mb-4 text-2xl py-24 text-center font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl ">Our AI models that make life easier</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stress",
    description:
      "A model that predicts stress based on humidity, temperature and footstep",
    link: "/stress",
  },
  {
    title: "ChatBot",
    description:
      "A chat bot that provides solutions to common problems related to mensual health",
    link: "/chatbot",
  },
  {
    title: "Anxious Meter",
    description:
      "A mental health app that provides tips on how to deal with Anxiety",
    link: "/anx",
  },
  {
    title: "Sleep",
    description:
      "A AI model that predicts sleep quality based on sleep duration and time in bed",
    link: "/sleep",
  },
  
];
