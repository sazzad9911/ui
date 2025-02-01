import React from "react";
import CardNews from "../../components/CardNews";
import img6 from "../../../public/img6.png";
export default function News() {
  return (
    <div className="container mx-auto pt-20 md:pt-24 px-2">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 ">
          <CardNews
            title="Master class AI assistant powered by Chat GPT-3 for your E-commerce business"
            description="Introducing the next evolution in customer service for your E-commerce business: the Master Class AI Assistant powered by Chat GPT-3. Revolutionize the way you engage with your customers and streamline your operations with cutting-edge artificial intelligence technology.

            Our Master Class AI Assistant is not just another chatbot; it's a sophisticated virtual assistant trained on vast amounts of data to understand and respond to customer queries with unparalleled accuracy and natural language understanding. Whether it's answering product inquiries, assisting with purchases, or providing personalized recommendations, our AI Assistant is equipped to handle it all in real-time, 24/7.
            
            With Chat GPT-3 at its core, our AI Assistant goes beyond scripted responses, adapting to the nuances of each interaction to deliver a truly human-like experience. It can understand context, detect sentiment, and even engage in meaningful conversations, making every interaction with your customers feel personalized and engaging.
            
            By integrating our Master Class AI Assistant into your E-commerce platform, you'll not only enhance the customer experience but also boost efficiency and productivity. Say goodbye to long wait times and repetitive inquiries, and hello to instant, intelligent assistance that drives sales and fosters customer loyalty.
            
            Don't let your E-commerce business fall behind in the age of AI. Embrace the future of customer service with our Master Class AI Assistant powered by Chat GPT-3 and stay ahead of the competition."
            img={img6}
            date={"01-02-2024"}
          ></CardNews>
          <CardNews
            title="Unlocking Tomorrow: The Power of Innovation"
            description="Innovation is the catalyst of progress, propelling humanity forward into uncharted realms of possibility. It is the relentless pursuit of creative solutions to age-old problems, the audacious quest to redefine what is possible, and the unwavering commitment to shape a better future for all.

            At the heart of innovation lies the courage to challenge the status quo, to question conventional wisdom, and to embrace the unknown. It is through this fearless exploration that groundbreaking ideas emerge, revolutionizing industries, transforming societies, and enriching lives.
            
            From the invention of the wheel to the discovery of electricity, from the internet revolution to the dawn of artificial intelligence, innovation has been the driving force behind humanity's greatest achievements. It has fueled scientific breakthroughs, spurred economic growth, and empowered individuals to dream, create, and achieve beyond their wildest imagination.
            
            But innovation is not just about technological advancement; it is also about empathy, inclusivity, and sustainability. It is about harnessing the power of diversity to unlock new perspectives, collaborating across boundaries to tackle global challenges, and ensuring that progress benefits not just a privileged few, but all members of society.
            
            As we stand on the brink of a new era of innovation, the possibilities are limitless. From renewable energy and biotechnology to space exploration and beyond, the journey ahead is filled with opportunities to shape a brighter, more equitable, and sustainable future for generations to come.
            
            At ScientistX, we embrace the spirit of innovation in all that we do. Through collaborative research, disruptive technologies, and a steadfast commitment to advancing the greater good, we are pioneering solutions that will redefine the world as we know it.
            
            Join us on this journey of discovery, as we unlock tomorrow and unleash the full potential of innovation to empower humanity and shape a better world for all."
            img={img6}
            date={"11-12-2023"}
          ></CardNews>
        </div>
        <div className="lg:col-span-1">
          <CardNews
            title="Introducing the new innovation, combine power of Social Media + Marketplace"
            date={"02-02-2024"}
          ></CardNews>
          <CardNews
            title="ScientistX want to sell 50% of share are selling to only business owner"
            description="Attention business owners: ScientistX, a pioneering company at the forefront of innovation, is offering a rare opportunity to acquire 50% of its shares exclusively to fellow entrepreneurs like you.

            As a leader in cutting-edge research and development, ScientistX has garnered international acclaim for its groundbreaking contributions to various industries. Now, with a vision to expand its horizons and forge strategic partnerships, ScientistX is seeking like-minded business owners to join forces and drive mutual success.
            
            By acquiring a stake in ScientistX, you gain access to a wealth of intellectual property, innovative technologies, and a talented team of scientists and engineers poised to revolutionize the landscape. This partnership opens doors to collaborative ventures, synergistic opportunities, and the potential for exponential growth in your respective markets.
            
            Don't miss this chance to become a part of something extraordinary. Seize the opportunity to invest in ScientistX and propel your business into the future of innovation. Contact us today to learn more about this exclusive offer and secure your place in shaping tomorrow's advancements.
            "
            date={"02-27-2024"}
          ></CardNews>
        </div>
      </div>
    </div>
  );
}
