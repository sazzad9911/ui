import React from "react";
import { useProgress } from "@react-three/drei";
export default function LoadingScreen() {
  const { progress } = useProgress();
  //console.log(progress);
  return (
    <div className="w-full h-full text-white flex justify-center items-center">
      <div className=" text-lg">Loading Model- {progress.toFixed(0)}%</div>
    </div>
  );
}
