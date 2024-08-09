// FeedbackVisualization.jsx

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

const Wedge = ({ position, rotation, angle, color, label }) => {
  // Create a wedge shape using a THREE.Shape and then extrude it
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(Math.cos(0), Math.sin(0));
  shape.absarc(0, 0, 1, 0, angle, false);
  shape.lineTo(0, 0);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.5,
    bevelEnabled: false,
  });

  return (
    <group position={position} rotation={rotation}>
      <mesh geometry={geometry}>
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        position={[Math.cos(angle / 2) * 1.2, Math.sin(angle / 2) * 1.2, 0.5]}
        fontSize={0.2}
        color="#000"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

const FeedbackVisualization = () => {
  // Simulated feedback data
  const feedbackData = [
    { value: 20, label: "Feature A" },
    { value: 35, label: "Feature B" },
    { value: 15, label: "Feature C" },
    { value: 40, label: "Feature D" },
    { value: 25, label: "Feature E" },
  ];

  const totalValue = feedbackData.reduce((sum, data) => sum + data.value, 0);

  // Calculate angles and positions for each wedge
  let startAngle = 0;
  const wedges = feedbackData.map((data, index) => {
    const angle = (data.value / totalValue) * Math.PI * 2;
    const wedge = {
      position: [0, 0, 0],
      rotation: [0, 0, startAngle],
      angle,
      color: `hsl(${index * 72}, 70%, 50%)`,
      label: data.label,
    };
    startAngle += angle;
    return wedge;
  });

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {wedges.map((wedge, index) => (
          <Wedge key={index} {...wedge} />
        ))}
      </Canvas>
    </div>
  );
};

export default FeedbackVisualization;
