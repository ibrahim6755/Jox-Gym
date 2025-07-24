import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jox Fitness Club",
  description:
    "Jox Fitness Club is your ultimate destination for strength, endurance, and transformation. Join our community to unleash your potential with expert training, state-of-the-art equipment, and a motivating environment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container w-7xl mx-auto">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
