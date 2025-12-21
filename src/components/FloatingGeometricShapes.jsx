// Import React hooks and framer-motion
import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function FloatingGeometricShapes() {
    // Generate an array of random shape properties using useMemo (so it runs only once)
    const shapes = useMemo(() => {
        return new Array(10).fill(null).map((_, i) => ({
            id: i, // Unique ID for React key
            size: Math.random() * 40 + 20, // Size between 20px and 60px
            top: `${Math.random() * 100}%`, // Random vertical position
            left: `${Math.random() * 100}%`, // Random horizontal position
            duration: Math.random() * 15 + 10, // Animation duration between 10s to 25s
            color: ['#4FC3F7', '#FF4081', '#B0BEC5'][i % 3], // Cycle between 3 colors
            shape: ['circle', 'square', 'triangle'][i % 3], // Cycle shapes
        }));
    }, []); // Empty dependency array ensures shapes only generate once

    return (
        // This wrapper stays fixed behind the content across the whole page
        <div className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden pointer-events-none">
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    // Common style applied to all shapes
                    className={`absolute opacity-20 ${
                        shape.shape === 'circle' ? 'rounded-full' : ''
                    }`}
                    style={{
                        width: shape.shape === 'triangle' ? 0 : shape.size,
                        height: shape.shape === 'triangle' ? 0 : shape.size,
                        top: shape.top,
                        left: shape.left,
                        backgroundColor: shape.shape !== 'triangle' ? shape.color : 'transparent',
                        // Only triangles need borders
                        borderLeft: shape.shape === 'triangle' ? '15px solid transparent' : undefined,
                        borderRight: shape.shape === 'triangle' ? '15px solid transparent' : undefined,
                        borderBottom: shape.shape === 'triangle' ? `30px solid ${shape.color}` : undefined,
                    }}
                    // Infinite floating animation in X, Y, and rotation
                    animate={{
                        y: [0, 50, -50, 0],
                        x: [0, 30, -30, 0],
                        rotate: [0, 360, 0],
                    }}
                    transition={{
                        duration: shape.duration, // custom speed
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            ))}
        </div>
    );
}
