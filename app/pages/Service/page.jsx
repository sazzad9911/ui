"use client";
import CardService from "../../components/CardService";

import Svg1 from "../../components/asset/Svg6";
import Svg2 from "../../components/asset/Svg10";
import Svg3 from "../../components/asset/Svg11";
import Svg5 from "../../components/asset/Svg13";
import Svg6 from "../../components/asset/Svg14";
import Svg7 from "../../components/asset/Svg15";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import React, { useRef } from "react";
import Image from "next/image";

export default function Service() {
  const parallaxRef = useRef();
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex flex-col w-full items-center py-20 md:py-32">
          <p className="text-[20px] font-medium text-[#ffffff]">Services</p>
          <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
          <p className="text-[14px] font-normal text-[#ffffff] text-center md:mt-4">
            {
              " At ScientistX Technology, we're committed to delivering exceptional services that drive success and exceed expectations. "
            }{" "}
            <br />
            {
              "Partner with us to unlock your full potential and achieve your business goals."
            }
          </p>
        </div>
        <div className=" text-white flex flex-wrap justify-center md:gap-10 gap-4">
          <CardService
            img={<Svg1></Svg1>}
            title="Apps Development"
            description="Harness the power of cutting-edge technology with our bespoke app development services. From concept to launch, we create innovative and intuitive mobile applications that captivate audiences and drive engagement."
          ></CardService>
          <CardService
            img={<Svg2></Svg2>}
            title="Graphics Design & UI/UX"
            description="Elevate your brand with stunning visuals and seamless user experiences. Our expert designers craft captivating graphics and intuitive interfaces that leave a lasting impression and enhance user satisfaction."
          ></CardService>
          <CardService
            img={<Svg3></Svg3>}
            title="Web Development"
            description="Build a strong online presence with our custom web development solutions. Whether it's a dynamic website or a robust e-commerce platform, we leverage the latest technologies to create responsive and scalable web solutions tailored to your needs."
          ></CardService>
          <CardService
              img={<Image src={require('../../components/asset/SmartDevice.svg')} alt="Maintanance"></Image>}
            title="Smart Device and IOT"
            description="Embrace the future of connectivity with our smart device and IoT solutions. From smart home automation to industrial IoT applications, we design and deploy intelligent systems that optimize efficiency and enhance convenience."
          ></CardService>
          <CardService
            img={<Svg5></Svg5>}
            title="AI Assistant"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable If you are going to use a passage of dfaf afa dasfdasf sfa  safas ade asdras aw afasd asdrasdr"
          ></CardService>
          <CardService
            img={<Svg6></Svg6>}
            title="Digital Marketing"
            description="Reach your target audience and drive results with our comprehensive digital marketing services. From social media management to search engine optimization (SEO), we develop tailored strategies to boost brand visibility, engagement, and conversions."
          ></CardService>
          <CardService
            img={<Svg7></Svg7>}
            title="SEO, Project research and Information"
            description="Stay ahead of the competition with our SEO and research services. We analyze market trends, conduct keyword research, and optimize your online presence to improve search engine rankings and drive organic traffic."
          ></CardService>
          <CardService
            img={<Image src={require('../../components/asset/Management.svg')} alt="Maintanance"></Image>}
            title="Project Management"
            description="Ensure project success with our professional project management services. From planning and execution to monitoring and delivery, we provide expert guidance and oversight to keep your projects on track and within budget."
          ></CardService>
          <CardService
            img={<Image src={require('../../components/asset/Maintanance.svg')} alt="Maintanance"></Image>}
            title="Project Maintanance"
            description="Keep your digital assets running smoothly with our maintenance services. From software updates to troubleshooting, we provide proactive maintenance solutions to ensure optimal performance and reliability."
          ></CardService>
        </div>
      </div>
    </div>
  );
}
