"use client"

import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function StackedCircularFooter() {
  return (
    <footer className="bg-black py-12 text-orange-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
            <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpeg"
              alt="Logo"
              width={80}
              height={30}
              className="rounded-md"
            />
          </Link>

          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Services</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Products</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Contact</a>
          </nav>

          <div className="mb-8 flex space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="icon"
                className="rounded-full border-orange-500 text-orange-400 hover:bg-orange-600/20"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{Icon.name}</span>
              </Button>
            ))}
          </div>

          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="rounded-full bg-[#1a1a1a] border-orange-500 text-orange-200 placeholder-orange-400"
                />
              </div>
              <Button type="submit" className="rounded-full bg-orange-500 hover:bg-orange-600 text-black">
                Subscribe
              </Button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-sm text-orange-500">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { StackedCircularFooter };
