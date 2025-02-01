"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Viewer from "./Animation";
import ButterflyEffect, { ButterflyEffect2 } from "./asset/butterflyEffect";
import Svg2 from "./asset/Svg2";
import Svg3 from "./asset/Svg3";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Svg4 from "./asset/Svg4";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function StartBox() {
  const router = useRouter();
  const handleType = (count) => {
    // access word count number
    // console.log(count);
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };
  return (
    <div className="container mx-auto pt-10 px-1">
      <div className=" lg:grid lg:grid-cols-2  w-full justify-between h-full  px-2 ">
        <div className=" w-full  lg:hidden  h-[100vw] ">
          <Viewer />
        </div>
        <div className="  h-full lg:flex items-center text-white">
          <div className="">
            <div className="lg:mb-20  hidden md:block mt-20">
              <ButterflyEffect></ButterflyEffect>
            </div>
            <div className="lg:mb-20 md:hidden flex justify-center">
              <Svg4></Svg4>
            </div>
            <div className="flex gap-2">
              <div>
                <Svg2></Svg2>
              </div>
              <div className="">
                <h1 className="text-[16px] font-bold text-justify tracking-wide">
                  Our services: <br />
                  <span className="font-normal text-[16px] text-[#FFCA27]">
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[
                        "Web Development & Design",
                        "Mobile Apps Development & Design",
                        "Smart Device and IOT",
                        "Project Management & Maintenance",
                        "AI Assistant",
                        "Graphics & UI/UX",
                        "SEO, Marketing",
                      ]}
                      loop={false}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      onLoopDone={handleDone}
                      onType={handleType}
                    />
                  </span>
                </h1>
                <br />
                <div className="relative">
                  <p className="  md:text-[16px] text-[14px] font-normal tracking-wide line-clamp-6">
                    ScientistX is a multinational consortium founded by the
                    ScientistX Group in 2021 with the aim of leveraging
                    technology to empower humanity. This visionary initiative
                    seeks to harness the power of cutting-edge technology to
                    address pressing global challenges and enhance the
                    well-being of individuals and communities worldwide. Through
                    collaborative research, innovation, and the application of
                    scientific advancements, ScientistX endeavors to foster
                    positive societal change and promote sustainable
                    development. By bringing together leading experts,
                    organizations, and stakeholders across various disciplines,
                    ScientistX is poised to drive transformative progress in
                    fields ranging from healthcare and education to
                    environmental conservation and beyond. With a steadfast
                    commitment to advancing the greater good, ScientistX is
                    dedicated to shaping a brighter future for all through the
                    intersection of science, technology, and humanity.
                  </p>
                  <span
                    onClick={() => {
                      router.push("pages/About");
                    }}
                    className=" bottom-0 text-green-500 cursor-pointer -right-10 z-10"
                  >
                    Read More
                  </span>
                </div>
                <br />
                <div className="">
                  <div className="flex  items-center gap-2">
                    <Link
                      className="px-6 py-2 text-[16px] font-normal cursor-pointer rounded-sm  bg-[#1B75BC]"
                      href="/pages/Login"
                    >
                      Login Here
                    </Link>
                    <Svg3></Svg3>
                  </div>
                </div>
                <p className="mt-[14px] text-[14px] font-normal">
                  Only login and registration features are available for
                  ScientistX Member’s
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="   z-0 hidden lg:flex">
          <Viewer />
        </div>
      </div>
    </div>
  );
}
