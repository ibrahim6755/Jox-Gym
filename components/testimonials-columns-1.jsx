"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = ({ className, testimonials, duration }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-black"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-10 rounded-3xl border border-orange-500 bg-[#111] text-orange-300 shadow-lg shadow-orange-600/10 max-w-xs w-full"
                key={i}
              >
                <div className="text-orange-200">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full border border-orange-500"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium text-orange-300 tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 text-orange-400 tracking-tight opacity-80">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
