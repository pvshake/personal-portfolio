import React, { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const EarthModel: FC = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <>
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
        position-x={0}
      />
    </>
  );
};

const EarthCanvas: FC = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <EarthModel />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
