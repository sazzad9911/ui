"use client";
import React from "react";
import Image from "next/image";

import Img1 from "../../../public/image 29.png";
import nahid from "../../../public/nahid.jpg";
import akash from "../../../public/Akash Profile.jpg";

function page() {
  return (
    <div className="text-white container mx-auto md:pt-24 pt-16 px-4">
      <div className="flex flex-col w-full items-center justify-start my-6">
        <p className="text-[20px] font-medium text-[#ffffff]">
          About The Company
        </p>
        <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
      </div>

      <div className="">
        ScientistX is a multinational consortium founded by the ScientistX Group
        in 2021 with the aim of leveraging technology to empower humanity. This
        visionary initiative seeks to harness the power of cutting-edge
        technology to address pressing global challenges and enhance the
        well-being of individuals and communities worldwide. Through
        collaborative research, innovation, and the application of scientific
        advancements, ScientistX endeavors to foster positive societal change
        and promote sustainable development. By bringing together leading
        experts, organizations, and stakeholders across various disciplines,
        ScientistX is poised to drive transformative progress in fields ranging
        from healthcare and education to environmental conservation and beyond.
        With a steadfast commitment to advancing the greater good, ScientistX is
        dedicated to shaping a brighter future for all through the intersection
        of science, technology, and humanity.
      </div>

      <div className="flex flex-col w-full items-center justify-start  my-10">
        <p className="text-[20px] font-medium text-[#ffffff]">
          Our Departments
        </p>
        <div className="h-1 mb-10 mt-2 w-full max-w-[300px] bg-[#1B75BC]"></div>

        <div className="flex flex-wrap gap-4 items-center mb-4">
          <div className="flex items-center">
            <div className="h-[14px] w-[14px] bg-white rounded-full mr-2"></div>
            <p className="text-lg text-[#ffffff]e text-center mr-[20px]">
              Department Of Development
            </p>
          </div>

          <div className="flex items-center">
            <div className="h-[14px] w-[14px] bg-white rounded-full mr-2"></div>
            <p className="text-lg text-[#ffffff]e text-center  mr-[20px]">
              Department Of Science & Technology
            </p>
          </div>

          <div className="flex items-center">
            <div className="h-[14px] w-[14px] bg-white rounded-full mr-2"></div>
            <p className="text-lg text-[#ffffff]e text-center  mr-[20px]">
              Department Of Marketing
            </p>
          </div>

          <div className="flex items-center">
            <div className="h-[14px] w-[14px] bg-white rounded-full mr-2"></div>
            <p className="text-lg text-[#ffffff]e   mr-[20px]">
              Department Of Content Creation and Film Direction
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-start ">
        <p className="text-[20px] font-medium text-[#ffffff]">
          Our Valued Members
        </p>
        <div className="h-1 my-2 mb-10 w-full max-w-[300px] bg-[#1B75BC]"></div>
      </div>

      <div className=" grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-4">
        <AboutCart
          img={require("../../../public/monju.jpeg")}
          name="Monjurul Islam"
          post="Chief Executing Officer"
          email="monjurul@scientistx.tech"
          text="Life is full of beautiful journey if you can handle your emotions"
        />
        <AboutCart
          onClick={() =>
            window.open("https://nahiduzzaman-portfolio.web.app/", "_blank")
          }
          img={nahid}
          name="Md. Nahiduzzaman"
          post="Chief Technology Officer(CTO)"
          email="nahid@scientistx.tech"
          text="Cultivate diligence as a routine, and life will blossom with beauty"
        />
        <AboutCart onClick={()=>window.open("https://sazzad-19.web.app","_blank")}
          img={require("../../../public/myimage.jpg")}
          name="MD SAZZAD HOSSAIN"
          post="Head Of Training and Development"
          email="sazzad@scientistx.tech"
          text="Life is a poetry about yourself in where you are a visitor only"
        />
        {/* <AboutCart
          img={Img1}
          name="MD Saibur Rahman"
          post="Chief Executing Officer"
          email="saibur@scientistx.tech"
          text="Life is full of beautiful journey if you can handle your emotions"
        /> */}
        <AboutCart onClick={()=>window.open("https://my-portfolio-d43ec.web.app/","_blank")}
          img={akash}
          name="Tasnim Shahriar Akash"
          post="Managing Director (MD)"
          email="akash@scientistx.tech"
          text="Pioneering solutions, where innovation meets excellence. Transforming ideas into powerful software for a brighter future."
        />
        <AboutCart 
        //onClick={()=>window.open("https://my-portfolio-d43ec.web.app/","_blank")}
          //img={akash}
          name="Rana Mirja"
          post="Head of Marketing"
          email="rana@scientistx.tech"
          text="Pioneering solutions, where innovation meets excellence. Transforming ideas into powerful software for a brighter future."
        />
      </div>
    </div>
  );
}

export default page;

const AboutCart = ({ img, name, post, email, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className=" bg-[#1B75BC] cursor-pointer text-[#fff] px-1 py-2 hover:bg-slate-500"
    >
      <div className=" flex items-center">
        <div class="shrink-0">
          <Image
            className="h-16 rounded-full w-16 ml-[5px]"
            src={img}
            alt="ChitChat Logo"
          />
        </div>
        <div className="ml-[10px]">
          <p className="text-[16px]">{name}</p>
          <p className="text-[14px]">{post}</p>
          <p className="text-[14px]">{email}</p>
        </div>
      </div>
      <p className="text-[14px] ml-[5px] mb-[10px]">“{text}”</p>
    </div>
  );
};
