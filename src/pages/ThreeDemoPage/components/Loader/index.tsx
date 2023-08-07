import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center style={{ color: "blue" }}>
      {progress ? parseInt(String(progress)) : 0} % loaded
    </Html>
  );
}
