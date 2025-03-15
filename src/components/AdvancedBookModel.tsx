'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface AdvancedBookModelProps {
  coverImage: string;
  spineImage?: string;
  backImage?: string;
  rotationSpeed?: number;
  width?: number;
  height?: number;
  depth?: number;
}

export default function AdvancedBookModel({ 
  coverImage, 
  spineImage, 
  backImage, 
  rotationSpeed = 0.005,
  width = 3,
  height = 4,
  depth = 0.5
}: AdvancedBookModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Load textures
  const coverTexture = useTexture(coverImage);
  const spineTexture = useTexture(spineImage || coverImage);
  const backTexture = useTexture(backImage || coverImage);
  
  // Set up textures
  useEffect(() => {
    [coverTexture, spineTexture, backTexture].forEach(texture => {
      if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
        texture.needsUpdate = true;
      }
    });
  }, [coverTexture, spineTexture, backTexture]);

  // Rotate the book on each frame
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  // Calculate half dimensions for positioning
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const halfDepth = depth / 2;

  return (
    <group ref={groupRef} position={[0, 0, 0]} castShadow receiveShadow>
      {/* Front cover */}
      <mesh position={[0, 0, halfDepth]} castShadow receiveShadow>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial 
          map={coverTexture} 
          roughness={0.5} 
          metalness={0.1}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Back cover */}
      <mesh position={[0, 0, -halfDepth]} rotation={[0, Math.PI, 0]} castShadow receiveShadow>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial 
          map={backTexture} 
          roughness={0.5} 
          metalness={0.1}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Spine (right side) */}
      <mesh position={[halfWidth, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
        <planeGeometry args={[depth, height]} />
        <meshStandardMaterial 
          map={spineTexture} 
          roughness={0.5} 
          metalness={0.1}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Left side */}
      <mesh position={[-halfWidth, 0, 0]} rotation={[0, -Math.PI / 2, 0]} castShadow receiveShadow>
        <planeGeometry args={[depth, height]} />
        <meshStandardMaterial 
          color="#222222" 
          roughness={0.5} 
          metalness={0.1}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Top */}
      <mesh position={[0, halfHeight, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <planeGeometry args={[width, depth]} />
        <meshStandardMaterial 
          color="#222222" 
          roughness={0.5} 
          metalness={0.1}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Bottom */}
      <mesh position={[0, -halfHeight, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <planeGeometry args={[width, depth]} />
        <meshStandardMaterial 
          color="#222222" 
          roughness={0.5} 
          metalness={0.1}
          side={THREE.FrontSide}
        />
      </mesh>
    </group>
  );
} 