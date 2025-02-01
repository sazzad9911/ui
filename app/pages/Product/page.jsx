"use client";
import CardService from "../../components/CardService";
import Svg9 from "../../components/asset/Svg9";
import Svg16 from "../../components/asset/Svg16";
import Svg17 from "../../components/asset/Svg17";
import Svg18 from "../../components/asset/Svg18";
import Svg19 from "../../components/asset/Svg19";
import Svg20 from "../../components/asset/Svg20";
import React, { useRef } from "react";
import Image from "next/image";

export default function Product() {
  const parallaxRef = useRef();
  return (
    <div className="">
       
        <div className="container mx-auto">
          <div className="flex flex-col w-full items-center py-20 md:py-32">
            <p className="text-[20px] font-medium text-[#ffffff]">Products</p>
            <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
            <p className="text-[14px] font-normal text-[#ffffff] text-center md:mt-4">
            {
              " At ScientistX Technology,  we're committed to delivering high-quality products that enrich lives and enhance experiences."
            }{" "}
            <br />
            {
              "Explore our diverse range of offerings and discover how we can help you achieve your goals, no matter where you are on your journey."
            }
          </p>
          </div>
          <div className="text-white flex flex-wrap justify-center md:gap-10 gap-4">
          <CardService
            route="https://40xbet.net/"
              isButton={true}
              img={<Svg16></Svg16>}
              title="Casino Gambling"
              description="Experience the thrill of the casino from the comfort of your own home with our cutting-edge online gambling platform. From classic table games to immersive slots, we offer a diverse range of games designed to entertain and excite players of all levels."
            ></CardService>
          <CardService
            route="https://duty.com.bd/"
              isButton={true}
              img={<Svg9></Svg9>}
              title="Online Service Platform"
              description="Simplify your life and streamline your tasks with our versatile online service platform. Whether you need to book appointments, order groceries, or schedule home services, our platform offers convenient solutions to meet your needs."
            ></CardService>
          <CardService
            route="https://amarschool.com.bd/"
              isButton={true}
              img={<Svg17></Svg17>}
              title="Online Education"
              description="Empower yourself with knowledge through our comprehensive online education platform. Access a wide range of courses, tutorials, and resources designed to help you learn new skills, advance your career, and achieve your personal and professional goals."
            ></CardService>
          <CardService
            route="https://smira.club/"
              isButton={true}
              img={<Svg18></Svg18>}
              title="Online Hotel Booking"
              description="Plan your next getaway with ease using our user-friendly online hotel booking platform. Discover a curated selection of accommodations, compare prices, and book your stay with confidence, knowing that you're getting the best deal."
            ></CardService>
            <CardService
            route="https://banglamartecommerce.com.bd/"
              isButton={true}
              img={<Svg19></Svg19>}
              title="E-Commerce"
              description="Shop with convenience and confidence on our secure e-commerce platform. Explore a vast array of products from trusted brands, enjoy seamless checkout experiences, and receive fast and reliable delivery to your doorstep."
            ></CardService>
            <CardService
            route="https://play.google.com/store/apps/details?id=com.committee.bd&pli=1"
              isButton={true}
              img={<Svg20></Svg20>}
              title="Social Communication"
              description="Stay connected with friends, family, and colleagues across the globe with our innovative social communication platform. Share updates, exchange messages, and engage in meaningful conversations in a safe and inclusive environment."
            ></CardService>
            <CardService
            route="https://writerfair.com/"
              isButton={true}
              img={<Image src={require('../../components/asset/ReadingContent.svg')} alt="icon"></Image>}
              title="Online Reading Content"
              description="Immerse yourself in a world of stories, knowledge, and inspiration with our online reading content platform. Access a diverse collection of articles, blogs, books, and magazines on topics ranging from literature and history to science and technology."
            ></CardService>
           
          </div>
        </div>
    
     
    </div>
  );
}
