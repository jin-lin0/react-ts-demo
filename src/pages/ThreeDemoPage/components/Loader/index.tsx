import { useProgress } from "@react-three/drei";
import { Plane } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
export default function Loader() {
  const { progress } = useProgress();
  const { scale } = useSpring({
    scale: progress,
  });
  return (
    <animated.mesh scale-x={scale} scale-y={0.1}>
      <Plane args={[5, 0.1]} />
      <meshBasicMaterial color="blue" />
    </animated.mesh>
  );
}
