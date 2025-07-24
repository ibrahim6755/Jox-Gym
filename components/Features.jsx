import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dumbbell, Settings2, Sparkles } from "lucide-react";
import Image from "next/image";

export function Features() {
  return (
    <section className="py-24 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl  lg:text-5xl font-extrabold leading-tight">
            <span className="text-orange-600"> Designed</span> to Push Your{" "}
            <span className="text-orange-600">Limits</span>
          </h2>
          <p className="mt-4">
            At Jox Fitness Club, every feature is built to help you crush your
            goals — physically and mentally.
          </p>
        </div>

        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-12 *:text-center md:mt-16">
          <Card className="group bg-black border-none rounded-lg overflow-hidden transition duration-300 hover:scale-[1.02] shadow-[0_0_10px_4px_rgba(255,102,0,0.5)]">
            {/* Full-size top image */}
            <div className="w-full h-48 relative">
              <Image
                src="/images/motivation.png"
                alt="Motivation"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Card Text Content */}
            <CardHeader className="pb-3 pt-6 text-center">
              <h3 className="mt-2 font-extrabold leading-tight text-orange-600 text-lg">
                Elite Training Programs
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white text-center">
                From strength training to HIIT, our certified trainers and
                curated plans are tailored to your fitness level and goals.
              </p>
            </CardContent>
          </Card>

          <Card className="group bg-black border-none rounded-lg overflow-hidden transition duration-300 hover:scale-[1.02] shadow-[0_0_10px_4px_rgba(255,102,0,0.5)]">
            {/* Full-size top image */}
            <div className="w-full h-48 relative">
              <Image
                src="/images/motivation.png"
                alt="Motivation"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Card Text Content */}
            <CardHeader className="pb-3 pt-6 text-center">
              <h3 className="mt-2 font-extrabold leading-tight text-orange-600 text-lg">
                Elite Training Programs
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white text-center">
                From strength training to HIIT, our certified trainers and
                curated plans are tailored to your fitness level and goals.
              </p>
            </CardContent>
          </Card>

          <Card className="group bg-black border-none rounded-lg overflow-hidden transition duration-300 hover:scale-[1.02] shadow-[0_0_10px_4px_rgba(255,102,0,0.5)]">
            {/* Full-size top image */}
            <div className="w-full h-48 relative">
              <Image
                src="/images/motivation.png"
                alt="Motivation"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Card Text Content */}
            <CardHeader className="pb-3 pt-6 text-center">
              <h3 className="mt-2 font-extrabold leading-tight text-orange-600 text-lg">
                Elite Training Programs
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white text-center">
                From strength training to HIIT, our certified trainers and
                curated plans are tailored to your fitness level and goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">
      {children}
    </div>
  </div>
);
