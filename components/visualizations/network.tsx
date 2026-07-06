"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: 1, x: 15, y: 25, s: 8 },
  { id: 2, x: 35, y: 45, s: 10 },
  { id: 3, x: 65, y: 30, s: 9 },
  { id: 4, x: 80, y: 60, s: 8 },
  { id: 5, x: 55, y: 70, s: 12 },
  { id: 6, x: 25, y: 75, s: 7 },
  { id: 7, x: 90, y: 15, s: 9 },
];

const lines = [
  [1, 2],
  [2, 3],
  [3, 4],
  [2, 5],
  [5, 6],
  [3, 7],
  [5, 4],
];

export function Network() {
  return (
    <div className="absolute inset-0">

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {lines.map(([a, b], i) => {
          const A = nodes.find((n) => n.id === a)!;
          const B = nodes.find((n) => n.id === b)!;

          return (
            <motion.line
              key={i}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke="rgb(34 211 238)"
              strokeOpacity="0.25"
              strokeWidth="0.18"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.15,
              }}
            />
          );
        })}
      </svg>

      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.s,
            height: node.s,
            transform: "translate(-50%,-50%)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: node.id * 0.3,
          }}
        />
      ))}
    </div>
  );
}