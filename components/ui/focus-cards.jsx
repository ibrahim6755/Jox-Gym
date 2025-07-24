"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Card Component
const Card = ({ card, index, hovered, setHovered }) => {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative rounded-lg bg-gray-100 dark:bg-neutral-900 overflow-hidden h-72 w-full transition-all duration-300 ease-out flex items-center justify-center",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        width={200}
        height={200}
        className="object-contain"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-6 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          <span className=" font-extrabold leading-tight">{card.title}</span>
            <p className="text-sm text-neutral-200 mt-1 font-normal">{card.description}</p>
        </div>
      </div>
    </div>
  );
};


// FocusCards Component
const FocusCards = ({ cards }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:max-w-5xl mx-auto md:px-8 md:w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

export default FocusCards;
