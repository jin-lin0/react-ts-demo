import { useProgress } from "@react-three/drei";
import { Plane } from "@react-three/drei";
export default function Loader() {
  const { progress } = useProgress();
  return (
    <mesh>
      <Plane args={[5, 0.1]} />
      <meshBasicMaterial color="blue" />
      <mesh scale={[progress, 1, 1]} />
    </mesh>
  );
}
