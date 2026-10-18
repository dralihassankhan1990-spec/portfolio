"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Lightweight float wrapper (sine-based hover + slow spin) — avoids pulling drei's barrel. */
function FloatWrap({ children, position = [0, 0, 0], speed = 1.2, intensity = 1 }) {
    const ref = useRef();
    const offset = useMemo(() => Math.random() * Math.PI * 2, []);
    useFrame((state) => {
        const t = state.clock.elapsedTime;
        ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.28 * intensity;
        ref.current.position.x = position[0] + Math.cos(t * speed * 0.6 + offset) * 0.12 * intensity;
        ref.current.rotation.y = t * 0.18 * speed + offset;
        ref.current.rotation.x = Math.sin(t * speed * 0.4 + offset) * 0.25;
    });
    return (
        <group ref={ref} position={position}>
            {children}
        </group>
    );
}

/**
 * Scroll-driven camera rig. `progress` is a ref holding 0..1 (page scroll).
 * As the user scrolls, the camera drifts forward + upward and looks at origin,
 * giving the "diving through the scene" feel.
 */
function ScrollRig({ progress }) {
    useFrame((state) => {
        const p = progress.current || 0;
        state.camera.position.z = 8 - p * 3;
        state.camera.position.y = p * 2.2;
        state.camera.position.x = Math.sin(p * Math.PI) * 0.6;
        state.camera.lookAt(0, p * 0.6, 0);
    });
    return null;
}

/** Slow-drifting particle field. */
function Particles({ count = 420 }) {
    const ref = useRef();
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 22;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 13;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
        }
        return arr;
    }, [count]);

    useFrame((state, dt) => {
        ref.current.rotation.y += dt * 0.02;
        ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.12) * 0.3;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color="#67e8f9"
                transparent
                opacity={0.55}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
}

/** Floating wireframe shapes — scroll rotates + disperses the group. */
function Shapes({ progress }) {
    const group = useRef();

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        const p = progress.current || 0;
        group.current.rotation.y = t * 0.07 + p * 1.4;
        group.current.rotation.x = p * 0.55;
        group.current.position.y = p * 2.4;
    });

    const mat = (color, opacity) => (
        <meshStandardMaterial color={color} wireframe transparent opacity={opacity} />
    );

    return (
        <group ref={group}>
            <FloatWrap position={[-3.4, 0.9, -1.2]} speed={1.3} intensity={1.1}>
                <mesh>
                    <icosahedronGeometry args={[0.95, 0]} />
                    {mat("#22d3ee", 0.5)}
                </mesh>
            </FloatWrap>
            <FloatWrap position={[3.4, -0.6, -0.8]} speed={1.7} intensity={1.4}>
                <mesh rotation={[0.4, 0.2, 0]}>
                    <torusGeometry args={[0.75, 0.22, 12, 40]} />
                    {mat("#818cf8", 0.45)}
                </mesh>
            </FloatWrap>
            <FloatWrap position={[2.6, 1.8, -2.4]} speed={1.1} intensity={0.9}>
                <mesh>
                    <octahedronGeometry args={[0.6, 0]} />
                    {mat("#fbbf24", 0.35)}
                </mesh>
            </FloatWrap>
            <FloatWrap position={[-2.4, -1.6, -2]} speed={1.9} intensity={1.6}>
                <mesh>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    {mat("#38bdf8", 0.35)}
                </mesh>
            </FloatWrap>
            <FloatWrap position={[0.2, -2.2, -3]} speed={0.9} intensity={0.7}>
                <mesh>
                    <tetrahedronGeometry args={[0.55, 0]} />
                    {mat("#22d3ee", 0.3)}
                </mesh>
            </FloatWrap>
            {/* Faint grid floor for depth */}
            <gridHelper args={[26, 26, "#164e63", "#0e2a3a"]} position={[0, -3.4, 0]} />
        </group>
    );
}

/**
 * Full-bleed 3D hero background. Rendered client-side only (dynamic import
 * with ssr:false in the parent). `progressRef` carries framer-motion's
 * scrollYProgress as a plain ref so the canvas stays decoupled from React renders.
 */
export default function HeroScene({ progressRef }) {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 52 }}
            dpr={[1, 1.75]}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            style={{ pointerEvents: "none" }}
        >
            <ambientLight intensity={0.55} />
            <pointLight position={[6, 4, 4]} intensity={1.4} color="#22d3ee" />
            <pointLight position={[-6, -2, 3]} intensity={0.7} color="#818cf8" />
            <pointLight position={[0, 5, -4]} intensity={0.4} color="#fbbf24" />
            <Shapes progress={progressRef} />
            <Particles />
            <ScrollRig progress={progressRef} />
            <fog attach="fog" args={["#060a14", 9, 20]} />
        </Canvas>
    );
}
