'use client';

import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, useProgress, Html } from '@react-three/drei';
import AdvancedBookModel from './AdvancedBookModel';

// Loading component to show while the 3D assets are loading
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white text-lg">
        Loading... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

interface BookSceneProps {
  bookImage: string;
}

export default function BookScene({ bookImage }: BookSceneProps) {
  // State to track if component is mounted (for SSR compatibility)
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything on the server
  if (!mounted) return null;

  return (
    <div className="w-full h-[500px] bg-black">
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
        
        <Suspense fallback={<Loader />}>
          <AdvancedBookModel 
            coverImage={bookImage} 
            rotationSpeed={0.01}
            width={3}
            height={4}
            depth={0.5}
          />
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={1} 
        />
      </Canvas>
    </div>
  );
} 