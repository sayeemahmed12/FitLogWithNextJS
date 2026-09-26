import Image from "next/image";
import React from "react";
import BannerImage from "../../../public/assets/banner.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-4 my-6 md:mx-10 md:my-10">
      <div className="hero min-h-[75vh] rounded-3xl bg-[#22263079] border border-gray-800/75">
        <div className="flex w-full flex-col items-center justify-between gap-10 px-6 py-10 md:px-10 lg:flex-row-reverse lg:px-16">

          <div className="flex w-full justify-center lg:w-auto">
            <Image
              src={BannerImage}
              width={350}
              height={350}
              alt="Banner"
              className="w-full md:w-[350px] max-w-[350px] rounded-2xl"
              priority
            />
          </div>

          <div className="w-full text-center md:text-start lg:max-w-3xl">
            <p className="text-[#C2F800] font-bold text-sm mb-4">WORKOUT LIBRARY</p>
            <h1 className= "font-oswald text-[40px] font-bold leading-tight sm:text-[50px] lg:text-[70px] tracking-[-0.02em]">TRAIN WITH INTENT. LOG EVERY SET.</h1>

            <p className="py-6 text-base leading-7 text-gray-400 lg:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <Link className="btn bg-[#C2F800] text-black rounded-md" href="#library">            
              BROWSE WORKOUTS
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}