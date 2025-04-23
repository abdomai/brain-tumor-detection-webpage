
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';
import * as THREE from 'three';

// Separate component for the brain mesh
const BrainMesh = ({ color = "#9b87f5" }: { color?: string }) => {
  const meshRef = useRef<Mesh>(null);

  // Animation logic is now handled with a simple rotation in the return
  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
      <sphereGeometry args={[1.4, 64, 64]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.5}
        metalness={0.1}
        wireframe={false}
      />
    </mesh>
  );
};

// Main component with canvas
const Brain3D = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full h-[400px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <BrainMesh />
      </Canvas>
    </div>
  );
};

export default Brain3D;
