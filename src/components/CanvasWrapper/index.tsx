"use client";

import { Canvas } from "@react-three/fiber";
import { FC } from "react";

const CanvasWrapper: FC = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight color="blue" position={[0, 0, 1]} />
        <mesh>
          <sphereGeometry args={[2, 365, 365]} />
          <meshDepthMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
