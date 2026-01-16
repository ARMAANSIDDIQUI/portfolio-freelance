
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const RotatingShape = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.2;
      
      // Interaction speed up
      if (hovered) {
        meshRef.current.rotation.x += delta * 2;
        meshRef.current.rotation.y += delta * 2;
      }
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color={hovered ? '#ff0000' : '#ff6600'} 
        wireframe={true}
        emissive={hovered ? '#ff0000' : '#cc5200'}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const Navbar3DLogo: React.FC = () => {
  return (
    <div className="w-16 h-16 relative cursor-pointer">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3.5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <RotatingShape />
        </Float>
      </Canvas>
    </div>
  );
};

export default Navbar3DLogo;
