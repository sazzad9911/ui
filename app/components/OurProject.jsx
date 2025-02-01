'use client'
import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import useIsInViewport from "../hooks/useIsInViewport";
import Link from "next/link";
import Image from "next/image";

import img1 from '../../public/image 22.png';
import img7 from '../../public/img7.jpg';
import img8 from '../../public/img8.jpg';

import Icon from '../../public/Group.png';

const OurProject = () => {
  return (
    <div className="text-white container mx-auto px-2 py-2">
      <div className="flex flex-col w-full items-center md:my-20 my-10">
        <p className="text-[20px] font-medium text-[#ffffff]">Our Success</p>
        <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
      </div>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 justify-center gap-2 mt-10 ">
        <SimpleCart
          description={
            "Innovation fuels progress, driving humanity towards new horizons. It's the bold pursuit of solutions, reshaping industries and enriching lives. From ancient marvels to modern breakthroughs, innovation powers our greatest achievements. Yet, it's more than just technology—it's empathy, inclusivity, sustainability. At ScientistX, we embrace innovation's transformative power. Through collaborative research and disruptive technologies, we pioneer solutions for a brighter future. Join us as we unlock tomorrow, harnessing innovation to empower humanity and shape a world where everyone thrives. Together, let's ignite potential, fueling progress for generations to come."
          }
          count={10}
          number={1}
          title={"Innovations"}
          url='/pages/News'
        />
        <SimpleCart
          description={
            "Success in business hinges on vision, adaptability, and execution. It's about seizing opportunities, delivering value, and evolving with the market. Sustainability, ethics, and social impact are paramount. At ScientistX, we merge these principles with innovation, collaboration, and unwavering values. Our journey is marked by resilience, learning, and meaningful partnerships. Together, we shape a future where business success is synonymous with positive societal impact."
          }
          count={7}
          number={1}
          title={"Navigating Success in Business"}
          url='/pages/Product'
        />
        <SimpleCart
          description={
            "Our product is more than just a solution—it's a revolution. Engineered with innovation and designed for impact, it embodies our commitment to excellence. From concept to creation, every detail is meticulously crafted to exceed expectations and inspire transformation. Versatile, reliable, and user-friendly, our product sets a new standard in its industry. With cutting-edge features and unparalleled performance, it empowers users to achieve their goals with ease. At ScientistX, we're proud to present a product that not only meets the needs of today but anticipates the demands of tomorrow. Join us in embracing the future of technology with our revolutionary solution."
          }
          count={20}
          number={1}
          title={"Products"}
          url='/pages/Product'
        />
      </div>
      <div className="flex flex-col w-full items-center md:my-20 my-10">
        <p className="text-[20px] font-medium text-[#ffffff]">Client Satisfactions</p>
        <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
      </div>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center gap-2 mt-10">
        <RivewCart img={img1}
          name='TechEnthusiast21' 
          post='American business owner' 
          email='teche***21@gmail.com' 
          text1="I've been using ScientistX's product for several months now, and I must say, it's truly impressive. The attention to detail and the level of innovation packed into this solution are outstanding. From its intuitive user interface to its robust performance, it's evident that a lot of thought went into its development. What I appreciate most is its versatility—I've found it to be incredibly adaptable to my diverse needs. Plus, the customer support team has been exceptional, always responsive and helpful whenever I've had questions. Overall, I highly recommend ScientistX's product to anyone looking for a game-changing solution in their industry."
          text2="Thank you for your fantastic review! We're thrilled you're impressed with our product's innovation and versatility. Our team is always here to support you. We appreciate your support and look forward to continuing to exceed your expectations."
          ></RivewCart>
        <RivewCart img={img7}
          name='Dr. Mazda Islam' 
          post='Bangladeshi business owner' 
          email='inno***ow@gmail.com' 
          text1="I recently started using ScientistX's product, and I must say, it's been a game-changer for our business. The seamless integration with our existing systems has saved us countless hours of work, and the advanced features have allowed us to streamline our processes like never before. Not to mention, the customer support team has been incredibly responsive and knowledgeable, making the onboarding process a breeze. Overall, I'm thoroughly impressed with the product's performance and its positive impact on our operations. Thank you, ScientistX, for delivering such a valuable solution!"
          text2="Thank you for your wonderful review! We're thrilled to hear that our product has been a game-changer for your business, and we're delighted that you found our features and customer support to be top-notch. We're committed to your success and look forward to continuing to support your operations."
          ></RivewCart>
        <RivewCart img={img8}
          name='Mistry neil' 
          post='American business owner' 
          email='future***er@example.com' 
          text1="As a forward-thinking company, we're always on the lookout for innovative solutions to propel our business into the future. ScientistX's product has exceeded our expectations in every way. Its intuitive design and robust functionality have streamlined our workflow and increased productivity across the board. The level of customization available has allowed us to tailor the product to fit our specific needs perfectly. Additionally, the ongoing updates and support from the ScientistX team have been invaluable. We're grateful to have found such a reliable partner in driving our company's success forward. Highly recommend!"
          text2="Thank you for your wonderful review! We're thrilled to hear that our product has been a game-changer for your business, and we're delighted that you found our features and customer support to be top-notch. We're committed to your success and look forward to continuing to support your operations."
          ></RivewCart>
      </div>
    </div>
  );
};

export default OurProject;
const SimpleCart = ({ number, title, description, count,url }) => {
  //const ref = useRef();
  const [ref, isInViewport] = useIsInViewport({
    threshold: 0.5, // Adjust threshold as needed
  });
  return (
    <div
      className="shadow-md bg-[#1B75BC] rounded-md flex justify-center flex-col items-center p-4"
      ref={ref}
    >
      <div className="w-full flex justify-center">
        <div className=" bg-[#275278] w-[40px] h-[40px] rounded-full flex justify-center items-center font-normal text-[16px] border-4 border-[#ffffff] ">
          {number}
        </div>
      </div>
      <div className="mt-4 font-normal text-[16px] w-full text-center">{title}</div>
      <CountUp start={0} end={count}>
        {({ countUpRef, start }) => (
          <div className="font-normal text-[16px] mt-1">
            <span onClick={isInViewport ? start() : null} ref={countUpRef} />+
          </div>
        )}
      </CountUp>
      <div className="font-light text-[15px] mt-2 line-clamp-4 text-center">{description}</div>
      <div className="flex justify-center mt-3 rounded bg-white ">
        <Link href={url} className="px-8 py-2  text-black font-light text-[15px]">View</Link>
      </div>

    </div>
  );
};
const RivewCart = ({ img, name, post, email, text1, text2 }) => {

  return (
    <div
      className=" shadow-md bg-[#1B75BC] rounded-md flex-col justify-left items-center flex-wrap py-4 px-8 text-[#ffffff]"
    >
      <div className="flex items-center">
        <div className="">
          <Image height={50} width={50} className="rounded-full" src={img} alt='OurProject' />
        </div>

        <div className="ml-4">
          <p className="text-[16px] font-medium ">{name}</p>
          <p className="text-[15px] font-normal">{post}</p>
          <p className="text-[15px] font-normal">{email}</p>
        </div>
      </div>

      <div className="mt-4 mt-30">
        <p className="text-left text-[15px] font-light line-clamp-2">{text1}</p>
      </div>

      <div className="pt-4 pl-[70px] relative">
        <div className=" absolute -left-8 top-0">
          <Image className="h-[60px] w-[100px]" src={Icon} alt='OurProject' />
        </div>

        <p className="text-[15px] font-light line-clamp-2">{text2}</p>
      </div>
    </div>
  );
};
