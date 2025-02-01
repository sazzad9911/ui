"use client";
import React, { useState } from "react";
import Svg5 from "./asset/Svg5";
import img5 from "../../public/img5.png";
import PartnerSlider from "./ReviewSlider";
import Form from '../components/Form'
export default function Partners() {
  const [formShow, setFormShow] = useState(false);

  const imgData = [
    {
      img: img5,
    },
    {
      img: img5,
    },
    {
      img: img5,
    },
    {
      img: img5,
    },
    {
      img: img5,
    },
    {
      img: img5,
    },
    {
      img: img5,
    },
    {
      img: img5,
    },
  ];

  return (
    <div className="container mx-auto px-2 ">
      <div className="flex flex-col w-full items-center py-10 md:py-16">
        <p className="text-[20px] font-medium text-[#ffffff]">Our Partner</p>
        <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
      </div>
      <PartnerSlider imgData={imgData}></PartnerSlider>
      <div className="flex flex-col w-full items-center mt-10">
        <p className="text-[20px] font-medium text-[#ffffff]">Be A Partner</p>
        <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:gap-10 gap-2 justify-center items-center">
        <div className="max-w-[500px] text-white">
          <div className={`${formShow ? "hidden" : "block"}`}>
          <p className=" text-[20px] font-medium text-[#FFCA27]">
            Let’s Go for a deal
          </p>
          <p className=" text-[15px] font-light mt-[7px] mb-[22px]">
            {
              "With our groundbreaking product poised to revolutionize the market, let's join forces for success. We offer unmatched value, a proven track record, and a dedicated team. Together, we'll seize opportunities, drive growth, and shape the future. Let's make it happen—let's go for a deal."
            }
          </p>
          <div
            onClick={() => setFormShow(true)}
            className="bg-[#1B75BC] text-[15px] font-light px-6 py-2 w-min rounded cursor-pointer shadow hover:shadow-[#1B75BC]"
          >
            Request
          </div>
          </div>
          <div className={`${formShow ? "block" : "hidden"}`}>
            <Form></Form>
          </div>
        </div>
        <Svg5></Svg5>
      </div>
    </div>
  );
}
