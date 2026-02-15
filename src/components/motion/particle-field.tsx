"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const seeded = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const ParticleMesh = ({ count }: { count: number }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const buffer = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const stride = i * 3;
      const radius = 2.2 + seeded(i + 1) * 4.6;
      const theta = seeded(i + 2) * Math.PI * 2;
      const phi = Math.acos(2 * seeded(i + 3) - 1);

      buffer[stride] = radius * Math.sin(phi) * Math.cos(theta);
      buffer[stride + 1] = radius * Math.sin(phi) * Math.sin(theta);
      buffer[stride + 2] = radius * Math.cos(phi);
    }
    return buffer;
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y += delta * 0.032;
    pointsRef.current.rotation.x += delta * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#5f7e93"
        size={0.016}
        sizeAttenuation
        transparent
        opacity={0.76}
      />
    </points>
  );
};

export const ParticleField = ({ particleCount }: { particleCount: number }) => {
  return (
    <div className="particle-layer" aria-hidden>
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 9], fov: 52 }}>
        <color attach="background" args={["#eef3f6"]} />
        <fog attach="fog" args={["#eef3f6", 5, 14]} />
        <ParticleMesh count={particleCount} />
      </Canvas>
    </div>
  );
};
