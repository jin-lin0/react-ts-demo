import { Suspense, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Box,
  Sphere,
  Cone,
  OrbitControls,
  Plane,
  Circle,
  Cylinder,
  Torus,
  Dodecahedron,
  Text,
} from "@react-three/drei";
import { Mesh } from "three";
import "./index.less";
import Loader from "./components/Loader";

const ThreeDemoPage = () => {
  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? 1.5 : 1 });
  const RotatingBox = () => {
    const myMesh = useRef<Mesh>(null!);
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.x = Math.sin(a) / 4;
    });
    return (
      <animated.mesh
        scale={scale}
        onClick={() => setActive(!active)}
        ref={myMesh}
      >
        <OrbitControls enableDamping enablePan enableRotate enableZoom />
        <Sphere position={[0, 0, -3]}>
          <meshNormalMaterial />
          <Text position={[0, 0, 1]} fontSize={0.3} color="white">
            Three.js
          </Text>
        </Sphere>
      </animated.mesh>
    );
  };
  return (
    <div className="ThreeDemoPage">
      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight position={[-2, 5, 2]} color="red" />
        <Suspense fallback={<Loader />}>
          <RotatingBox />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default ThreeDemoPage;
