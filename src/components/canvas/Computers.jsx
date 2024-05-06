// sketchFab = free 3d models(downloadable)
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  // useGLTF allows us to use 3d-models
  const computer = useGLTF("./desktop_pc/scene.gltf")
  return (
    <mesh >
      <hemisphereLight intensity={1.5} groundColor={"black"} />
      <spotLight 
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={4} />

      <primitive
        object={computer.scene}
        scale={isMobile? 0.7 : 0.75}
        position={isMobile?[0,-3,-2.2]:[0,-3.25,-1.5]}
        rotation={[-0.01,-0.2, -0.1]}
        
      />
    </mesh>
  )
}


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    // adding event listener for changing to the screen size
    const mediaQuery =  window.matchMedia("(max-width: 500px)");
    // set initial value isMobile state variable
    setIsMobile(mediaQuery.matches);
    // define CB functn to handle changes to the media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    // add the CB functn as a listener for the changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // remove the event listener whe the  component is unmounted
    return () => {
      mediaQuery.removeEventListener("change",handleMediaQueryChange);
    }
  },[]);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1,2]}
      // filed of view = how wide we want to see(kitne  door se dekhna h)
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>

      {/* Allows us a loader while our model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* <Suspense > */}
        {/* allows us to move model left or right */}
        <OrbitControls
          enableZoom={false}
          // har angle se nhi ghumana h bas 1 hi axis par ghumana h
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />

    </Canvas>
  )

}

export default ComputersCanvas;