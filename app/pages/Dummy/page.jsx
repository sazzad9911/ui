import Link from "next/link";

function Dummy() {
  return <div className="h-screen flex justify-center items-center text-white flex-col gap-4">
   <h1 className=" text-4xl"> Comming soon!</h1>
    <Link href='/' className="border border-white rounded px-6 py-2">Home</Link>
  </div>;
}

export default Dummy;
