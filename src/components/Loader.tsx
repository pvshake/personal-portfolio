import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="mt-[40px] font-extrabold text-[#f1f1f1] text-[14px]">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}
