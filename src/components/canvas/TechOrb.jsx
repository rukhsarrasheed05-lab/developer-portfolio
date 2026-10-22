import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Html, Preload } from "@react-three/drei";

const Orb = ({ name, color }) => (
  <Float speed={1.8} rotationIntensity={1.1} floatIntensity={1.6}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 2, 2]} intensity={1} />
    <mesh>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.35}
        roughness={0.25}
        metalness={0.15}
        wireframe
      />
    </mesh>
    <Html center distanceFactor={7} occlude>
      <div
        style={{ color }}
        className="pointer-events-none select-none whitespace-nowrap text-xs font-mono font-medium"
      >
        {name}
      </div>
    </Html>
  </Float>
);

const TechOrb = ({ name, color }) => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <Canvas frameloop={reduced ? "demand" : "always"} dpr={[1, 1.6]}>
      <Suspense fallback={null}>
        <Orb name={name} color={color} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TechOrb;
