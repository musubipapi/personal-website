"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh: THREE.Mesh;
  };
  materials: {
    base_material: THREE.MeshStandardMaterial;
  };
};

export function IcedAmericano(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/iced_americano.glb") as GLTFResult;
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (meshRef.current.rotation.z += delta));
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.mesh.geometry}
        material={materials.base_material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
      />
    </group>
  );
}

useGLTF.preload("/iced_americano.glb");

export function EspressoMachine(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/espresso_machine.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh.geometry}
        material={materials.base_material}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={12}
      />
    </group>
  );
}

useGLTF.preload("/espresso_machine.glb");

export function Espresso(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/espresso.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh.geometry}
        material={materials.base_material}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={10}
      />
    </group>
  );
}

useGLTF.preload("/espresso.glb");

export function Latte(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/latte.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh.geometry}
        material={materials.base_material}
        rotation={[Math.PI / 2, -0.3, Math.PI / 2]}
        scale={10}
      />
    </group>
  );
}

useGLTF.preload("/latte.glb");
