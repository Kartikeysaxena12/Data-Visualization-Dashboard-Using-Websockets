// ThreeVisualization.jsx

import React from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BoxGeometry, MeshStandardMaterial, Mesh } from "three";

// Extend react-three-fiber with the Three.js objects
extend({ BoxGeometry, MeshStandardMaterial, Mesh });

const Box = () => {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
};

const ThreeVisualization = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeVisualization;
