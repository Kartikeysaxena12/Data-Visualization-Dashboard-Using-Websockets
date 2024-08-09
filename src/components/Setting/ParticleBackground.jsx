// ParticleBackground.jsx
import React, { useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleBackground() {
  const particles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < 5000; i++) {
      const x = THREE.MathUtils.randFloatSpread(10);
      const y = THREE.MathUtils.randFloatSpread(10);
      const z = THREE.MathUtils.randFloatSpread(10);
      particles.push(new THREE.Vector3(x, y, z));
    }
    return particles;
  }, []);

  return (
    <Points positions={particles} limit={5000}>
      <PointMaterial color="#1e3a8a" size={0.06} sizeAttenuation={true} />
    </Points>
  );
}

export default ParticleBackground;
