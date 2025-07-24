"use client";

import FocusCards from "@/components/ui/focus-cards";

export default function Supplements() {
  const cards = [
  {
    title: "BCAA",
    src: "/images/bcaa-removebg-preview.png",
    description: "Helps reduce muscle soreness and supports recovery after intense workouts.",
  },
  {
    title: "Creatine",
    src: "/images/creatine-removebg-preview.png",
    description: "Boosts strength, power, and high-intensity exercise performance.",
  },
  {
    title: "Omega-3",
    src: "/images/omega-removebg-preview.png",
    description: "Supports heart, brain, and joint health with essential fatty acids.",
  },
  {
    title: "Whey Protein",
    src: "/images/whey-removebg-preview.png",
    description: "Aids muscle growth and repair with fast-digesting high-quality protein.",
  },
];

  return (
    <>
       <div className="text-center">
          <h2 className="text-balance text-4xl  lg:text-5xl font-extrabold leading-tight py-24">
            <span className="text-orange-600"> All </span> type of 
            <span className="text-orange-600"> Supplements </span> available
          </h2>
        </div>
      <FocusCards cards={cards} />
    </>
  );
}
