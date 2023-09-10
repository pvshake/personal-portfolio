import React, { FC, useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";

const Stars: FC = () => {
  const starsRef = useRef<any>(null);
  const sphere = random.inSphere(new Float32Array(5000), { radius: 100 });

  useFrame((state, delta) => {
    starsRef.current.rotation.x -= delta / 10;
    starsRef.current.rotation.y -= delta / 20;
  });

  return (
    <>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={starsRef} positions={sphere} stride={3} frustumCulled>
          <PointMaterial
            color="#f272c8"
            size={0.15}
            sizeAttenuation
            transparent
            depthWrite={false}
          />
        </Points>
      </group>
    </>
  );
};

const StarsCanvas: FC = () => {
  return (
    <>
      <div className="w-full h-auto absolute inset-0 z-[-1]">
        <Canvas camera={[0, 0, 1]}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </>
  );
};

export default StarsCanvas;
