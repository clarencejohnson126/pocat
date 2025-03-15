'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Book model component
function BookModel({ coverImage }) {
  const groupRef = useRef();
  const texture = useTexture(coverImage);
  
  // Set up texture
  useEffect(() => {
    if (texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1);
      texture.needsUpdate = true;
    }
  }, [texture]);

  // Dimensions
  const width = 3;
  const height = 4;
  const depth = 0.5;
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const halfDepth = depth / 2;

  return (
    <group ref={groupRef} position={[0, 0, 0]} castShadow receiveShadow>
      {/* Front cover */}
      <mesh position={[0, 0, halfDepth]} castShadow receiveShadow>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial 
          map={texture} 
          roughness={0.5} 
          metalness={0.1}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Back cover */}
      <mesh position={[0, 0, -halfDepth]} rotation={[0, Math.PI, 0]} castShadow receiveShadow>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial 
          map={texture} 
          roughness={0.5} 
          metalness={0.1}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Spine (right side) */}
      <mesh position={[halfWidth, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
        <planeGeometry args={[depth, height]} />
        <meshStandardMaterial 
          color="#00c278" 
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

export default function ThreeDLogo() {
  // State to track if component is mounted (for SSR compatibility)
  const [mounted, setMounted] = useState(false);
  // Define rotation speed here to avoid unused variable warning
  const autoRotateSpeed = 1;

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything on the server
  if (!mounted) return null;

  return (
    <section id="3d-model" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-extrabold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unsere <span className="text-[#00c278]">Masterarbeit</span> Bindungen
          </motion.h2>
          <motion.div 
            className="mt-2 flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-20 h-1 rounded-full bg-[#00c278] inline-flex"></div>
          </motion.div>
          <motion.p 
            className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Drehen Sie das Modell, um unsere hochwertige Bindung zu erkunden
          </motion.p>
        </div>

        <div className="h-[500px] w-full">
          <Canvas shadows dpr={[1, 2]}>
            <color attach="background" args={['#000000']} />
            
            <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
            
            <ambientLight intensity={0.5} />
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.15} 
              penumbra={1} 
              intensity={1} 
              castShadow 
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <BookModel 
              coverImage="/B9-1536x1536.png" 
            />
            <Environment preset="city" />
            
            <OrbitControls 
              enablePan={false} 
              enableZoom={true} 
              autoRotate 
              autoRotateSpeed={autoRotateSpeed} 
            />
          </Canvas>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="#konfigurator"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#00c278] hover:bg-[#00a066] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00c278] transition-colors"
          >
            Jetzt konfigurieren
          </a>
        </motion.div>
      </div>
    </section>
  );
} 