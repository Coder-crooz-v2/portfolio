import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const Desktop = () => {
  const computer = useLoader(GLTFLoader, '/models/scene.gltf')
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
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
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
    >
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[100, -5, -3]}
        angle={0.12}
        penumbra={1}
        intensity={5000}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight 
        intensity={30} 
        position={[-4, 2, 1]}
        />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1}
        position={isMobile ? [0, -3, -2.2] : [-4, -1, -3.5]}
        rotation={[0.0, -0.2, -0.2]}
      />
      <OrbitControls 
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableZoom={false}
        />
    </Canvas>
  )
}

export default Desktop