import React, { useRef } from "react";
import CountUp from "react-countup";
import useIsInViewport from "../../Hooks/useIsInViewport";

const OurProject = () => {
  return (
    <div className="dark:text-white w-full px-5 py-2">
      <div>
        <h1 className="text-5xl text-center mb-[120px]">Our Projects</h1>
      </div>
      <div className="w-full grid grid-cols-3 gap-10 mt-11">
        <SimpleCart
          description={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim"
          }
          count={100}
          number={1}
          title={"Recent Projects"}
        />
        <SimpleCart
          description={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim"
          }
          count={100}
          number={1}
          title={"Recent Projects"}
        />
        <SimpleCart
          description={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim"
          }
          count={100}
          number={1}
          title={"Recent Projects"}
        />
      </div>
    </div>
  );
};

export default OurProject;
const SimpleCart = ({ number, title, description, count }) => {
  const ref = useRef();
  const inPort = useIsInViewport(ref);
  return (
    <div
      className="shadow-md bg-[#c698d834] rounded-md flex justify-center items-center flex-wrap p-6"
      ref={ref}
    >
      <div className="w-full flex justify-center">
        <div className=" bg-[#81428d] w-[40px] h-[40px] rounded-full flex justify-center items-center font-bold text-2xl border-4 border-[#c698d8] ">
          {number}
        </div>
      </div>
      <div className="mt-4 text-xl w-full text-center">{title}</div>
      <CountUp start={0} end={count}>
        {({ countUpRef, start }) => (
          <div className="text-3xl font-extrabold mt-4">
            <span onClick={inPort ? start() : null} ref={countUpRef} />
          </div>
        )}
      </CountUp>
      <div>{description}</div>
    </div>
  );
};
