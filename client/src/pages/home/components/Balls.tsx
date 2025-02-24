import { Canvas } from '@react-three/fiber';
import { Decal, OrbitControls, useTexture } from '@react-three/drei';
import { Float } from '@react-three/drei';

const Ball = ({ skill }: { skill: string }) => {
    const [texture] = useTexture([skill]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={1.75}>
                <icosahedronGeometry args={[1.5, 3]}/>
                <meshStandardMaterial color="#30D5C8" polygonOffset polygonOffsetFactor={-5} flatShading />
                <Decal position={[0, 0, 1.5]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={texture} />
            </mesh>
        </Float>
    )
}

const Balls = ({ skill }: { skill: string }) => {
    return (
        <Canvas frameloop="demand" camera={{ position: [0, 0, 5], fov: 75 }}>
            <OrbitControls autoRotate autoRotateSpeed={5} enablePan={false} enableZoom={false} enableDamping dampingFactor={0.2} />
            <Ball skill={skill} />
        </Canvas>
    )
}

export default Balls
