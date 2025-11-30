import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative">
      {/* Background Glows (Match Layout Theme) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[28rem] h-[28rem] bg-[#2563EB25] rounded-full blur-[160px]" />
        <div className="absolute bottom-[5%] right-[20%] w-[28rem] h-[28rem] bg-[#4F46E525] rounded-full blur-[160px]" />
      </div>

      {/* Hero Section */}
      <section className="pb-20 pt-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 px-6">
          {/* Left Content */}
          <div className="text-center sm:text-left">
            <div className="mb-4">
              <span className="text-gray-500 tracking-wider uppercase text-sm">
                Spott <span className="text-indigo-400">*</span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
              Discover &
              <br />
              create amazing
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                events.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-lg font-light">
              Whether you&apos;re hosting or attending, Spott helps you create
              memorable experiences with ease.
            </p>

            <Link href="/explore">
              <Button
                size="xl"
                className="rounded-full px-8 py-6 text-lg bg-orange-600 hover:bg-orange-700"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <Image
              src="/hero.png"
              alt="Event app mockup"
              width={800}
              height={800}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
