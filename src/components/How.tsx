"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import humidity from "../../public/humidity.jpg"
import temp from "../../public/temperature.png"
import foot from "../../public/footsteps.png"

const content = [
  {
    title: "Humidity calculation",
    description:
      "The humidity of the human body varies depending on factors like environmental conditions, activity level, and individual physiology. On average, the skin's surface humidity typically ranges from 30% to 70%. However, this can change based on factors like sweating, which increases skin moisture, or dry environments, which can lead to moisture loss through evaporation. In the respiratory system, the air in the lungs is nearly saturated with water vapor, with a relative humidity close to 100%. Overall, the body works to maintain a balance of moisture to support various physiological functions and to regulate body temperature",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={humidity}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="git demo"
        />
      </div>
    ),
  },
  
  {
    title: "Temperature",
    description:
      "The average normal body temperature for adults is around 98.6°F (37°C), although it can vary slightly depending on factors such as age, time of day, and activity level. Generally, temperatures between 97°F (36.1°C) and 99°F (37.2°C) are considered within the normal range. However, it's essential to note that individual variations exist, and body temperature can fluctuate throughout the day due to factors such as exercise, stress, and hormonal changes. Additionally, certain medical conditions or medications can affect body temperature regulation.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src={temp}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="git demo"
        />
      </div>
    ),
  },
  {
    title: "Footsteps",
    description:
      "In moments of stress, the echo of footsteps can transform into a potent symbol, stirring a myriad of emotions within. Each step becomes a harbinger of anticipation, a reminder of vulnerability, or a beacon of hope. The sound, once mundane, now carries weight, its rhythm dictating the tempo of anxiety or the cadence of relief. Whether approaching or receding, footsteps in stress amplify awareness, triggering a primal instinct to assess, react, or retreat. Yet amidst the chaos, there's a paradoxical comfort in the familiarity of one's own gait, offering a steady rhythm amidst the cacophony of stress's symphony.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={foot}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="git demo"
        />
      </div>
    ),
  },
];
export function How() {
  return (
    <div className="p-10 ">
        <div className="text-center mb-40">   
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">What you needs to know before getting start</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">You need to know several factor before getting started like humidity, temperature and steps count to continue to stress calculator</p>
        </div>
      <StickyScroll content={content} />
    </div>
  );
}
