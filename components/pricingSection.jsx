"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

function PricingSection({ tiers, className }) {
  const [isYearly, setIsYearly] = useState(false);

  const buttonStyles = {
    default: cn(
      "h-12 bg-black text-orange-500",
      "hover:bg-zinc-900 hover:text-orange-400",
      "border border-zinc-700 shadow-sm hover:shadow-md",
      "text-sm font-medium"
    ),
    highlight: cn(
      "h-12 bg-orange-600 hover:bg-orange-500",
      "text-white shadow-md hover:shadow-lg",
      "font-semibold text-base"
    ),
  };

  const badgeStyles = cn(
    "px-4 py-1.5 text-sm font-medium",
    "bg-orange-600 text-white border-none shadow-lg"
  );

  return (
    <section
      className={cn(
        "relative bg-black my-12 py-14",
        "py-12 px-4 md:py-24 lg:py-32",
        "overflow-hidden",
        className
      )}
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-orange-600">
            Simple, transparent pricing
          </h2>
          <div className="inline-flex items-center p-1.5 bg-zinc-900 rounded-full border border-zinc-800 shadow-sm">
            {["Monthly", "Yearly"].map((period) => (
              <button
                key={period}
                onClick={() => setIsYearly(period === "Yearly")}
                className={cn(
                  "px-8 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                  (period === "Yearly") === isYearly
                    ? "bg-orange-600 text-white shadow-lg"
                    : "text-orange-400 hover:text-white"
                )}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group backdrop-blur-sm",
                "rounded-3xl transition-all duration-300 flex flex-col",
                tier.highlight
                  ? "bg-orange-100/5"
                  : "bg-zinc-900",
                "border",
                tier.highlight
                  ? "border-orange-600 shadow-xl"
                  : "border-zinc-800 shadow-md",
                "hover:translate-y-0 hover:shadow-lg"
              )}
            >
              {tier.badge && tier.highlight && (
                <div className="absolute -top-4 left-6">
                  <Badge className={badgeStyles}>{tier.badge}</Badge>
                </div>
              )}

              <div className="p-8 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={cn(
                      "p-3 rounded-xl",
                      tier.highlight
                        ? "bg-orange-100/10 text-orange-500"
                        : "bg-zinc-800 text-orange-400"
                    )}
                  >
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-orange-500">
                    {tier.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">
                      ${isYearly ? tier.price.yearly : tier.price.monthly}
                    </span>
                    <span className="text-sm text-zinc-400">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {tier.features.map((feature) => (
                    <div key={feature.name} className="flex gap-4">
                      <div
                        className={cn(
                          "mt-1 p-0.5 rounded-full transition-colors duration-200",
                          feature.included
                            ? "text-orange-500"
                            : "text-zinc-600"
                        )}
                      >
                        <CheckIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">
                          {feature.name}
                        </div>
                        <div className="text-sm text-zinc-400">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Button
                  className={cn(
                    "w-full relative transition-all duration-300",
                    tier.highlight ? buttonStyles.highlight : buttonStyles.default
                  )}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {tier.highlight ? (
                      <>
                        Buy now
                        <ArrowRightIcon className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Get started
                        <ArrowRightIcon className="w-4 h-4" />
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { PricingSection };
