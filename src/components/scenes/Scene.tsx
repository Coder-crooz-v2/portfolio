// src/Scene.tsx
import { Html, OrbitControls, Preload, useProgress } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function Loader() {
    const { progress } = useProgress()
    console.log(progress)
    return <Html center>{progress} % loaded</Html>
}

const Scene: React.FC = () => {
    const gltf = useLoader(GLTFLoader, '/models/desktop_pc/scene.gltf');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event: MediaQueryListEvent): void => {
        setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    
    return (
        <Canvas
            frameloop='demand'
            camera={{ position: [20, 3, 0], fov: 25 }}
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            shadows
        >
            <ambientLight intensity={1} />

            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <mesh>
                    <pointLight 
                        position={[0, 2.5, 0]}
                        intensity={7} 
                    />
                    <hemisphereLight
                        intensity={0.35}
                        groundColor='black'
                    />
                    <spotLight
                        position={[15, 80, -1]}
                        angle={0.12}
                        penumbra={2}
                        intensity={20000}
                        castShadow
                        shadow-mapSize={1024}
                    />
                    <primitive
                        object={gltf.scene}
                        scale={window.innerWidth < 768 ? window.innerWidth < 640 ? 0.5 : 0.7 : 0.9}
                        position={isMobile ? [0, -1.75, -1.5] : [0, -1.75, -1.5]}
                        rotation={[0, -0.2, -0.1]}
                    />
                </mesh>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default Scene;