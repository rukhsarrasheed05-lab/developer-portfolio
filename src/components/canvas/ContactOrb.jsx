import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Preload } from "@react-three/drei";

function Planet() {
  const ref = useRef(null);
  useFrame((_state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.4, 64, 64]} />
      <MeshDistortMaterial
        color="#12102b"
        emissive="#00e5c7"
        emissiveIntensity={0.25}
        roughness={0.2}
        metalness={0.6}
        distort={0.28}
        speed={1.1}
      />
    </mesh>
  );
}

const ContactOrb = () => (
  <Canvas camera={{ position: [0, 0, 4.5], fov: 42 }} dpr={[1, 1.6]}>
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 3]} intensity={1} />
      <pointLight position={[-3, -2, -2]} color="#8452ff" intensity={1.4} />
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <Planet />
      </Float>
      <Preload all />
    </Suspense>
  </Canvas>
);

export default ContactOrb;
