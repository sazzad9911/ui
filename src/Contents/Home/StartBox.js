import React from "react";
import Viewer from "../anim";
import { Typewriter } from "react-simple-typewriter";

export default function StartBox() {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="lg:flex w-full justify-between h-full mt-[50px] lg:mt-[120px]">
      <div className="w-full lg:hidden h-[100vw]">
        <Viewer />
      </div>
      <div className=" max-w-[800px] px-5 py-2 h-full lg:flex items-center ">
        <div>
          <h1 className="text-xl text-justify tracking-wide">
            Our services{" "}
            <span className="font-bold text-pink-600">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Web Security and Service",
                  "Web Design and Development",
                  "Live and Real world Games",
                  "Unique Graphics and 3D Models",
                  "Backend Service and Data Stores",
                  "Drag and Drop Design",
                  "Software and Tools",
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
          <span className=" text-lg tracking-wide leading-8 line-clamp-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable.
            
          </span>
          <br />
          <div className="w-full mt-6">
            <button className="px-4 py-2 border cursor-pointer rounded-sm font-bold ">
              Login/Registration
            </button>
          </div>
        </div>
      </div>
      <div className="w-[630px] hidden lg:flex">
        <Viewer />
      </div>
    </div>
  );
}
