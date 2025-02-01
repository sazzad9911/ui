"use client";
import Image from "next/image";
import React from "react";

import img1 from "../../public/img2.png";
import img2 from "../../public/java.png";
import img3 from "../../public/typescript-svgrepo-com.png";
import img4 from "../../public/python-svgrepo-com 1.png";
import img5 from "../../public/js-svgrepo-com.png";
import img6 from "../../public/mysql-logo-svgrepo-com.png";
import img7 from "../../public/mongodb-svgrepo-com.png";
import img8 from "../../public/postgresql-svgrepo-com.png";
import img9 from "../../public/Apple.png";
import img10 from "../../public/Redux.png";
import img11 from "../../public/Android.png";
import img12 from "../../public/React Native.png";
import img13 from "../../public/material-ui.png";
import img14 from "../../public/tailwind-svgrepo-com.png";
import img15 from "../../public/React Spring.png";
import img16 from "../../public/React.png";
import img17 from "../../public/next-js-svgrepo-com.png";
import img18 from "../../public/adobe-xd-svgrepo-com.png";
import img19 from "../../public/Adobe premiere pro.png";
import img20 from "../../public/Adobe After effect 1.png";
import img21 from "../../public/Adobe illustrator.png";
import img22 from "../../public/figma.png";
import img23 from "../../public/aws-svgrepo-com.png";
import img24 from "../../public/Firebase.png";
import img25 from "../../public/Windows.png";
import img26 from "../../public/socket-dot-io-svgrepo-com.png";
import img27 from "../../public/webrtc.png";
import img28 from "../../public/linux-svgrepo-com.png";
import img29 from "../../public/node-js-svgrepo-com (1) 1.png";

export default function Technologies() {
  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-col w-full items-center md:my-20 my-10">
        <p className="text-[20px] font-medium text-[#ffffff]">
          Our Uses Technologies
        </p>
        <div className="h-1 my-2 w-full max-w-[300px] bg-[#1B75BC]"></div>
        <p className="text-[14px] font-normal text-[#ffffff] text-center md:mt-4">
          We utilize a diverse range of technologies to power our projects,
          ensuring robustness and flexibility across the board. In programming
          languages, we leverage Swift, Java, TypeScript, Python, and JavaScript
          for their versatility and performance. For databases, we rely on
          MySQL, MongoDB, and PostgreSQL to handle data efficiently. In mobile
          app development, we harness the power of Apple and Android platforms,
          along with Redux and React Native for seamless user experiences. In
          web development, we utilize technologies like Material UI, Tailwind
          CSS, React Spring, React, and Next JS for dynamic and responsive
          interfaces. Design is facilitated through tools such as Adobe XD,
          Premiere Pro, After Effects, Illustrator, and Figma. Our server
          infrastructure is supported by AWS, Firebase, Windows Server, Socket
          Transport, WebRTC, and Linux Server technologies, ensuring reliability
          and scalability across our projects.
        </p>
      </div>
      <div className="md:flex text-white justify-between ">
        <div>
          <div className="md:mt-6 mt-4">
            <p className="mb-2">Programming Languages</p>
            <div className="text-white flex flex-wrap gap-8 md:gap-12 border-t-2 border-t-[#1B75BC] py-4">
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img1}
                  alt="technology"
                ></Image>
                <p className="text-center ">Swift</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img2}
                  alt="technology"
                ></Image>
                <p className="text-center ">JAVA</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img3}
                  alt="technology"
                ></Image>
                <p className="text-center ">TypeScript</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img4}
                  alt="technology"
                ></Image>
                <p className="text-center ">Python</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img5}
                  alt="technology"
                ></Image>
                <p className="text-center ">JavaScript</p>
              </div>
            </div>
          </div>
          <div className="md:mt-10 mt-4">
            <p className="mb-2">Databases</p>
            <div className="text-white flex flex-wrap gap-8 md:gap-12 border-t-2 border-t-[#1B75BC] py-4">
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img6}
                  alt="technology"
                ></Image>
                <p className="text-center ">MySQL</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img7}
                  alt="technology"
                ></Image>
                <p className="text-center ">MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img8}
                  alt="technology"
                ></Image>
                <p className="text-center ">PostgreSQL</p>
              </div>
            </div>
          </div>
          <div className="md:mt-10 mt-4">
            <p className="mb-2">Mobile Apps</p>
            <div className="text-white flex flex-wrap gap-8 md:gap-12 border-t-2 border-t-[#1B75BC] py-4">
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img9}
                  alt="technology"
                ></Image>
                <p className="text-center ">Apple</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img10}
                  alt="technology"
                ></Image>
                <p className="text-center ">Redux</p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img11}
                  alt="technology"
                ></Image>
                <p className="text-center ">Android</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img12}
                  alt="technology"
                ></Image>
                <p className="text-center ">React Native</p>
              </div>
            </div>
          </div>
          <div className="md:mt-10 mt-4">
            <p className="mb-2">Web Development Technologiess</p>
            <div className="text-white flex flex-wrap gap-8 md:gap-12 border-t-2 border-t-[#1B75BC] py-4">
            <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img29}
                  alt="technology"
                ></Image>
                <p className="text-center ">Node JS</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img13}
                  alt="technology"
                ></Image>
                <p className="text-center ">Material UI</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img14}
                  alt="technology"
                ></Image>
                <p className="text-center ">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img15}
                  alt="technology"
                ></Image>
                <p className="text-center ">React Spring</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img16}
                  alt="technology"
                ></Image>
                <p className="text-center ">React</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img17}
                  alt="technology"
                ></Image>
                <p className="text-center ">Next JS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-10 mt-5">
          <div className="md:mt-10 mt-4">
            <p className="mb-2 md:text-end">Design Tools</p>
            <div className="text-white flex flex-wrap gap-8 md:gap-12 border-t-2 border-t-[#1B75BC] py-4 md:justify-end">
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img18}
                  alt="technology"
                ></Image>
                <p className="text-center ">Adobe XD</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img19}
                  alt="technology"
                ></Image>
                <p className="text-center ">
                  Adobe <br /> premiere pro
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img20}
                  alt="technology"
                ></Image>
                <p className="text-center ">
                  Adobe <br /> After effect
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img21}
                  alt="technology"
                ></Image>
                <p className="text-center ">
                  Adobe <br /> illustrator
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img22}
                  alt="technology"
                ></Image>
                <p className="text-center ">Figma</p>
              </div>
            </div>
          </div>
          <div className="md:mt-10 mt-4">
            <p className="mb-2 md:text-end">Server & Tools</p>
            <div className="text-white flex flex-wrap gap-8 md:gap-12 border-t-2 border-t-[#1B75BC] py-4 md:justify-end">
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img23}
                  alt="technology"
                ></Image>
                <p className="text-center ">AWS service</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img24}
                  alt="technology"
                ></Image>
                <p className="text-center ">
                  Firebase <br /> Service
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img25}
                  alt="technology"
                ></Image>
                <p className="text-center ">
                  Windows <br /> Server
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img26}
                  alt="technology"
                ></Image>
                <p className="text-center ">
                  Socket <br /> Transport
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img27}
                  alt="technology"
                ></Image>
                <p className="text-center ">WebRTC</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 md:h-17 w-10 md:w-17"
                  src={img28}
                  alt="technology"
                ></Image>
                <p className="text-center ">Linux Server</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
