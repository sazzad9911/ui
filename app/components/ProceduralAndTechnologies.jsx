import React from "react";
import Svg23 from "./asset/Svg23";
import Svg25 from "./asset/Svg25";
import Svg26 from "./asset/Svg26";
import Svg27 from "./asset/Svg27";
import Svg28 from "./asset/Svg28";
import Image from "next/image";

function ProceduralAndTechnologies() {
  return (
    <div className="container mx-auto px-2 text-[#ffffff]">
      <p className="text-[20px] font-medium ">Procedural and Technologies</p>
      <div className="h-1 my-2 w-full max-w-[506px] bg-[#1B75BC]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-2   mt-4 md:mt-10">
        <div>
          <div className="flex flex-col items-center">
            <div className="flex md:gap-10 gap-2 ">
              <div>
                <Svg23></Svg23>
                <p className="text-center text-[16px] font-normal mt-1 text-[#FFCA27]">
                  Idea Generation
                </p>
              </div>

              <p className="text-[16px] font-normal xl:max-w-[450px] lg:max-w-[350px] md:max-w-[300px] max-w-[250px]">
                In the initial phase of our product development process, we
                focus on idea generation. This involves brainstorming sessions,
                market research, and gathering insights from various sources to
                identify potential opportunities. We encourage creativity and
                innovation, exploring different concepts and solutions that
                address unmet needs or pain points in the market. Through
                collaborative efforts and cross-functional teams, we generate a
                pool of ideas that have the potential to evolve into successful
                products.
              </p>
            </div>
            <Svg25></Svg25>
            <div className="flex md:gap-10 gap-2 items-center">
              <p className="text-[16px] font-normal xl:max-w-[450px] lg:max-w-[350px] md:max-w-[300px] max-w-[250px]">
                Once we have a pool of ideas, we move on to the business
                analysis phase. Here, we conduct thorough assessments of each
                ideas feasibility, market demand, competition, and revenue
                potential. We analyze market trends, customer preferences, and
                regulatory considerations to evaluate the viability of each
                concept. Through SWOT analysis and financial modeling, we assess
                the risks and opportunities associated with each idea. This
                process enables us to prioritize ideas based on their alignment
                with our business goals and market needs.
              </p>
              <div>
              <Image src={require('../components/asset/BusinessAnalysis.svg')} alt="image"></Image>
                <p className="text-center text-[16px] font-normal mt-1 text-[#FFCA27]">
                  Business Analysis
                </p>
              </div>
            </div>
            <Svg25></Svg25>
            <div className="flex md:gap-10 gap-2 items-center">
              <div>
                <Image src={require('../components/asset/development.svg')} alt="image"></Image>
                <p className="text-center text-[16px] font-normal mt-1 text-[#FFCA27]">
                  Development
                </p>
              </div>

              <p className="text-[16px] font-normal xl:max-w-[450px] lg:max-w-[350px] md:max-w-[300px] max-w-[250px]">
                With a refined idea and a solid business strategy in place, we
                proceed to the development phase. Here, we translate the concept
                into a tangible product, leveraging cutting-edge technologies,
                agile methodologies, and cross-functional collaboration. Our
                development team works iteratively, continuously refining the
                product based on user feedback and market dynamics. We emphasize
                quality assurance, scalability, and usability throughout the
                development process, ensuring that the final product meets the
                highest standards of excellence.
              </p>
            </div>
            <div className="block lg:hidden">
              <Svg25></Svg25>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-col flex-col-reverse lg:items-end items-center justify-between">
          <Svg26></Svg26>
          <div className="flex gap-2 items-end">
            <div className="hidden lg:block">
              <Svg27></Svg27>
            </div>
            <div>
              <div className="hidden lg:block">
                <Svg28></Svg28>
              </div>

              <div className="flex lg:flex-col flex-row-reverse items-center md:gap-10 gap-2">
                <div>
                <Image src={require('../components/asset/marketing.svg')} alt="image"></Image>
                  <p className="text-center text-[16px] font-normal mt-1 text-[#FFCA27]">
                    Marketing
                  </p>
                </div>

                <p className="text-[16px] font-normal xl:max-w-[450px] lg:max-w-[350px] md:max-w-[300px] max-w-[250px] mb-10 lg:mb-0">
                  The final step in bringing our product to market is marketing.
                  We develop comprehensive marketing strategies that encompass
                  branding, positioning, messaging, and distribution channels.
                  Through targeted campaigns, social media engagement, content
                  marketing, and partnerships, we create awareness and generate
                  buzz around our product. We tailor our marketing efforts to
                  different customer segments, highlighting the unique value
                  propositions and benefits of our product. By leveraging data
                  analytics and performance metrics, we continuously optimize
                  our marketing strategies to maximize reach, engagement, and
                  conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProceduralAndTechnologies;
