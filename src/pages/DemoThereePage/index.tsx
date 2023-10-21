import { Suspense, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, Text3D, Stars } from "@react-three/drei";
import { Mesh } from "three";
import "./index.less";
import Loader from "./components/Loader";
import { textGeoMetryConfig } from "../../config/threeConfig";

const DemoThreePage = () => {
  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? 1.5 : 1 });
  const RotatingBox = () => {
    const myMesh = useRef<Mesh>(null!);
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.x = Math.sin(a) / 4; //绕x轴旋转
    });
    return (
      <animated.mesh
        scale={scale}
        onClick={() => setActive(!active)}
        ref={myMesh}
      >
        <OrbitControls enableDamping enablePan enableRotate enableZoom />
        <Sphere position={[0, 0, -1]}>
          <meshNormalMaterial />
          <Text3D
            font={process.env.PUBLIC_URL + "/xingkai-min.json"}
            position={[-0.5, 0, 1]}
            {...textGeoMetryConfig}
          >
            Three
          </Text3D>
        </Sphere>
      </animated.mesh>
    );
  };
  return (
    <div className="DemoThreePage">
      <Canvas style={{ background: "black" }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[-2, 5, 2]} color="red" />
        <Suspense fallback={<Loader />}>
          <RotatingBox />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4} //亮度
            saturation={1} //饱和度
            fade
            speed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default DemoThreePage;
