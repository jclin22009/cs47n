"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { PinContainer } from "@/components/ui/3d-pin";

export default function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="w-full max-w-4xl mx-auto px-6 p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold break-words">
          CS47N: Datathletics
        </h1>
        <p className="text-neutral-500 max-w-2xl mx-auto my-2 text-md text-center relative z-10">
          This immersive seminar combines extensive hands-on data analytics with
          a first-hand peek into Stanford athletics. Class meetings alternate
          between instruction in various tools and techniques for data analysis
          and guest lectures by Stanford athletics coaches.
        </p>
        <div className="h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title="docs.google.com"
            href="https://docs.google.com/document/d/1lZia1w3vK5maRN2Gr2msON_cLzUbcJH6cBZN4x4VW1U/edit"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Syllabus
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Logistics and weekly assignments
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
