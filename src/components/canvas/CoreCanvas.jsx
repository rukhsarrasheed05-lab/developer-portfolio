import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Preload,
  Trail,
} from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const coreRef = useRef(null);
  useFrame((_state, delta) => {
    if (coreRef.current) coreRef.current.rotation.y += delta * 0.15;
  });
  return (
    <mesh ref={coreRef}>
      <icosahedronGeometry args={[1.05, 4]} />
      <MeshDistortMaterial
        color="#8452ff"
        emissive="#3a1f8f"
        emissiveIntensity={0.6}
        roughness={0.15}
        metalness={0.3}
        distort={0.35}
        speed={1.6}
      />
    </mesh>
  );
}

function Shell() {
  const shellRef = useRef(null);
  useFrame((_state, delta) => {
    if (shellRef.current) {
      shellRef.current.rotation.y -= delta * 0.08;
      shellRef.current.rotation.x += delta * 0.02;
    }
  });
  return (
    <lineSegments ref={shellRef}>
      <edgesGeometry args={[new THREE.IcosahedronGeometry(2, 1)]} />
      <lineBasicMaterial color="#00e5c7" transparent opacity={0.35} />
    </lineSegments>
  );
}

function Node({ radius, speed, offset, color }) {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    if (ref.current) {
      ref.current.position.set(
        Math.cos(t) * radius,
        Math.sin(t * 0.6) * (radius * 0.4),
        Math.sin(t) * radius
      );
    }
  });
  return (
    <Trail width={1.2} length={4} color={color} attenuation={(w) => w}>
      <mesh ref={ref}>
        <boxGeometry args={[0.09, 0.09, 0.09]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.1}
        />
      </mesh>
    </Trail>
  );
}

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 3]} intensity={1.1} />
      <pointLight position={[-3, -2, -3]} color="#00e5c7" intensity={1.2} />

      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
        <Core />
        <Shell />
        <Node radius={2.5} speed={0.5} offset={0} color="#00e5c7" />
        <Node radius={2.9} speed={0.35} offset={2.1} color="#a688ff" />
        <Node radius={2.2} speed={0.6} offset={4.2} color="#f1efff" />
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        maxPolarAngle={Math.PI / 1.7}
        minPolarAngle={Math.PI / 2.6}
      />
    </>
  );
};

const CoreCanvas = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <Canvas
      shadows={false}
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        {reduced ? (
          <>
            <ambientLight intensity={0.6} />
            <Core />
            <Shell />
          </>
        ) : (
          <Scene />
        )}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CoreCanvas;
