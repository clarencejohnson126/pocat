'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface BookModelProps {
  bookImage: string;
  rotationSpeed?: number;
}

export default function BookModel({ bookImage, rotationSpeed = 0.005 }: BookModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(bookImage);
  
  // Make sure texture has correct dimensions for a book
  useEffect(() => {
    if (texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1);
      texture.needsUpdate = true;
    }
  }, [texture]);

  // Rotate the book on each frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      {/* Book dimensions - width, height, depth */}
      <boxGeometry args={[3, 4, 0.5]} />
      <meshStandardMaterial 
        map={texture} 
        roughness={0.5} 
        metalness={0.1}
      />
    </mesh>
  );
} 