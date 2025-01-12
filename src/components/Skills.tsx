import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";

const Shape = ({ content }: { content: { icon: string } }) => {
    const [texture] = useTexture([content.icon]);

    return (
            <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
                <ambientLight intensity={0.25} />
                <directionalLight position={[0, 0, 0.05]} />
                <mesh castShadow receiveShadow scale={1.75}>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshStandardMaterial color="#b4b0ff" polygonOffset polygonOffsetFactor={-5} flatShading />
                    <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={texture} />
                </mesh>
            </Float>
    );
};

const Skills = ({ skill }: { skill: { icon: string } }) => {
    return (
        <Canvas frameloop="demand">
            <OrbitControls enableZoom={false} enablePan={false} />
            <Shape content = {skill}/>
        </Canvas>
    )
}

export default Skills
