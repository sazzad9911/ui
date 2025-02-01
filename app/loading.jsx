import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center bg-[#0b162259] h-screen text-white text-4xl">
      <Image src={require('../public/Animation.gif')} alt="loading gif"></Image>
    </div>
  );
}
