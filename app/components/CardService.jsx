import Link from "next/link";

function CardService({ img, title, description,isButton, route }) {
  return (
    <div className="max-w-[340px] bg-[#1B75BC] text-white flex flex-col items-center p-[17px] rounded">
      <div className="h-48 w-48 flex justify-center items-center">
      {img}
      </div>
     
      
      <p className="text-[20px] font-normal my-4">{title}</p>
      <p className="text-[16px] font-normal text-center line-clamp-5">
        {description}
      </p>
      {
        isButton && <div className="flex justify-center mt-3 bg-white rounded">
        <a href={`${route}`} target="blank" className="px-8 py-2   text-black font-light text-[15px]">View</a>
      </div>
      }
      
    </div>
  );
}

export default CardService;
