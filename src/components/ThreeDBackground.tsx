"use client";

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarField(props: Record<string, unknown>) {
    const ref = useRef<THREE.Points>(null);
    const count = 5000;

    // Track mouse manually because pointer-events-none is on the container
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const [positions, initialPositions] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const initial = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            // spread wider
            const radius = 2.0 * Math.pow(Math.random(), 1 / 3);

            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;

            initial[i * 3] = x;
            initial[i * 3 + 1] = y;
            initial[i * 3 + 2] = z;
        }
        return [pos, initial];
    }, [count]);

    useFrame((state, delta) => {
        if (!ref.current) return;

        // Base idle rotation
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;

        // Interactive Parallax to tilt the whole system
        const targetX = mouse.current.x * 0.5;
        const targetY = mouse.current.y * 0.5;

        ref.current.rotation.y += 0.02 * (targetX - ref.current.rotation.y);
        ref.current.rotation.x += 0.02 * (targetY - ref.current.rotation.x);

        // Particle physics: repel particles from mouse pointer
        const positionAttribute = ref.current.geometry.attributes.position;
        const posArray = positionAttribute.array as Float32Array;

        // Estimate mouse location in 3D (camera is at z=3)
        const mouse3DX = mouse.current.x * 2.5;
        const mouse3DY = mouse.current.y * 2.5;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const initX = initialPositions[i3];
            const initY = initialPositions[i3 + 1];

            const dx = posArray[i3] - mouse3DX;
            const dy = posArray[i3 + 1] - mouse3DY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Reactive repel radius
            if (dist < 0.8) {
                // Scatter force
                posArray[i3] += dx * 0.05;
                posArray[i3 + 1] += dy * 0.05;
            } else {
                // Spring back home smoothly
                posArray[i3] += (initX - posArray[i3]) * 0.02;
                posArray[i3 + 1] += (initY - posArray[i3 + 1]) * 0.02;
            }
        }

        positionAttribute.needsUpdate = true;
    });

    return (
        <group>
            <Points ref={ref} stride={3} frustumCulled={false} {...props}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <PointMaterial
                    transparent
                    color="#00f3ff"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export default function ThreeDBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="fixed inset-0 z-0 pointer-events-none bg-[#030014]" />;
    }

    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#030014]">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <StarField />
            </Canvas>
        </div>
    );
}
