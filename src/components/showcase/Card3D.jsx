"use client";
import React, { useRef, useState } from "react";

export default function Card3D() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 16, y: px * 16 });
    setGlare({ x: (px + 0.5) * 100, y: (py + 0.5) * 100 });
  };

  return (
    <div style={{ perspective: 900, width: "100%" }}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          padding: "28px 22px",
          background: "linear-gradient(135deg, rgba(34,211,238,0.12), rgba(251,191,36,0.08))",
          border: "1px solid rgba(34,211,238,0.3)",
          color: "#e5e7eb",
          fontFamily: "system-ui, sans-serif",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.22), transparent 60%)`,
            pointerEvents: "none",
          }}
        />
        <div style={{ transform: "translateZ(40px)" }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: "#22d3ee", fontWeight: 700 }}>PRO TIER</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", margin: "8px 0" }}>
            Mouse-tracking 3D Tilt
          </div>
          <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>
            Move your cursor over this card — it tilts in 3D with a dynamic glare highlight.
          </p>
        </div>
        <div
          style={{
            marginTop: 18,
            display: "inline-block",
            padding: "10px 22px",
            borderRadius: 999,
            background: "linear-gradient(90deg,#22d3ee,#0ea5e9)",
            color: "#060a14",
            fontWeight: 800,
            fontSize: 13,
            transform: "translateZ(60px)",
          }}
        >
          Hover Me
        </div>
      </div>
    </div>
  );
}
