import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

const Shape = ({ content }: { content: { icon: string } }) => {
    const [texture] = useTexture([content.icon]);

    return (
            <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 0, 0.05]} />
                <mesh castShadow receiveShadow scale={1.75}>
                    <icosahedronGeometry args={[1.5, 2]} />
                    <meshStandardMaterial color="#b4b0ff" polygonOffset polygonOffsetFactor={-5} flatShading />
                    <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={texture} />
                </mesh>
            </Float>
    );
};

const Skills = ({ skill }: { skill: { icon: string } }) => {
    return (
        <Canvas 
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}/>
            <OrbitControls enableZoom={false} enablePan={false} />
            <Shape content = {skill}/>
        </Canvas>
    )
}

export default Skills
