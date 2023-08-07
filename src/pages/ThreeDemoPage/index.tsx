import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, OrbitControls } from "@react-three/drei";
import "./index.less";

const ThreeDemoPage = () => {
  const [active, setActive] = useState(false);
  const RotatingBox = () => {
    const myMesh = useRef<any>(null);
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.x = a;
    });
    return (
      <mesh
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        ref={myMesh}
      >
        <OrbitControls enableDamping enablePan enableRotate enableZoom />
        <Box args={[1, 1, 1]} material-color="royalblue" />
      </mesh>
    );
  };
  return (
    <div className="ThreeDemoPage">
      <Canvas>
        <RotatingBox />
        <ambientLight intensity={0.2} />
        <directionalLight position={[0, 2, 10]} />
      </Canvas>
    </div>
  );
};
export default ThreeDemoPage;
