import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <spotLight intensity={1} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);
    });
};

export default Computers;
