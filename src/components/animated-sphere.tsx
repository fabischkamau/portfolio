import {  Sphere, MeshDistortMaterial } from "@react-three/drei"

// 3D Sphere Component
export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial color="#8b5cf6" attach="material" distort={0.3} speed={1.5} roughness={0} />
    </Sphere>
  )
}