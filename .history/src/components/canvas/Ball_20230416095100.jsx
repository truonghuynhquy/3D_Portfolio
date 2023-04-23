import React from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    FLoat,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const BallCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        ></Canvas>
    );
};

export default BallCanvas;
