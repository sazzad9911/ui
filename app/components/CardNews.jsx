'use client'
import { useState } from 'react';
import Image from 'next/image';

function CardNews({ title, description, img,date }) {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="p-4 bg-[#1B75BC] mb-4 rounded">
      <h1 className="md:text-[32px] text-[20px] text-[#ffffff] font-normal mt-2">
        {title}
      </h1>
      {description && (
        <div>
          <p className={`md:text-[16px] text-[14px] text-[#ffffff] font-normal overflow-hidden transition-height duration-500 ${expanded ? 'h-auto' : 'line-clamp-2'}`}>
            {description}
          </p>
          {description.length > 200 && (
            <span className="text-[#01E501] hover:underline cursor-pointer" onClick={toggleDescription}>
              {expanded ? 'See Less' : 'See More'}
            </span>
          )}
        </div>
      )}
      <p className="md:text-[16px] text-[14px] mt-1 text-[#ffffff] font-normal">
        {new Date(date).toUTCString()}
      </p>
      {img && <Image src={img} alt="news image" className="mt-3"></Image>}
    </div>
  );
}

export default CardNews;


