"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <section>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpeg"
              alt="Logo"
              width={80}
              height={30}
              className="rounded-md"
            />
            <span className="text-orange-600 font-bold">JOX</span> FITNESS CLUB
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="flex gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`text-md font-sans px-4 py-2 rounded-2xl transition-all duration-200 ${
                        isActive(item.href)
                          ? "bg-orange-600 text-white shadow-md"
                          : "text-white-700 hover:bg-orange-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" className="text-white border-2 bg-transparent">Explore</Button>
            <Button className="bg-orange-700 text-white hover:bg-orange-800 transition">
              Register
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/logo.jpeg"
                      alt="Logo"
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                    <span className="text-lg font-bold text-orange-700">
                      JOX FITNESS CLUB
                    </span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4 gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-md font-sans px-4 py-2 rounded-2xl transition ${
                      isActive(item.href)
                        ? "bg-orange-700 text-white shadow-md"
                        : "text-gray-800 hover:bg-orange-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Explore</Button>
                  <Button className="bg-orange-700 text-white hover:bg-orange-800 transition">
                    Register
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};
