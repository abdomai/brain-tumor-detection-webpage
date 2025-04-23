
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const BrainMesh = ({ color = "#9b87f5" }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.x + 0.003;
      mesh.current.rotation.y = mesh.current.rotation.y + 0.003;
    }
  });

  return (
    <Sphere ref={mesh} args={[1, 64, 64]} scale={1.4}>
      <MeshDistortMaterial 
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.5}
      />
    </Sphere>
  );
};

const Brain3D = ({ className = "" }) => {
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
