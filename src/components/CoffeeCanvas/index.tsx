"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense, useEffect, useState } from "react";
import {
  Espresso,
  EspressoMachine,
  IcedAmericano,
  Latte,
} from "../CoffeeRenders";

interface ICoffeeCanvas {
  coffee?: string;
}

const CoffeeCanvas: FC<ICoffeeCanvas> = ({ coffee }) => {
  const [selectedCoffee, setSelectedCoffee] = useState<string>("");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (coffee) {
      timer = setTimeout(() => setSelectedCoffee(coffee), 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [coffee]);

  return (
    <div id="canvas-container" className="h-72">
      <Canvas>
        <OrbitControls
          autoRotate={coffee ? true : false}
          autoRotateSpeed={2}
          enableRotate={coffee ? true : false}
          enableZoom={false}
          enablePan={false}
        />
        <Suspense fallback={null}>
          <ambientLight intensity={10} />
          <directionalLight position={[0, 0, 10]} intensity={4} />
          {!selectedCoffee && <EspressoMachine />}
          {selectedCoffee == "iced americano" && <IcedAmericano />}
          {selectedCoffee == "espresso" && <Espresso />}
          {selectedCoffee == "latte" && <Latte />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CoffeeCanvas;
