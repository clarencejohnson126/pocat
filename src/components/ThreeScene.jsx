import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
}

const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      {/* Load 3D Model (Replace URL with Your GLB/GLTF File) */}
      <Model url="/models/myObject.glb" />

      {/* Camera Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
