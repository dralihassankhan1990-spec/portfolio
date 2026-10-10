"use client";
import React, { useRef, useState } from "react";

export default function MagneticButton() {
  const wrapRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMove = (e) => {
    const r = wrapRef.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setPos({ x: x * 0.35, y: y * 0.35 });
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setPos({ x: 0, y: 0 });
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <button
        style={{
          padding: "16px 44px",
          borderRadius: 999,
          border: "none",
          cursor: "pointer",
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: 1,
          color: "#060a14",
          background: "linear-gradient(90deg,#22d3ee,#34d399)",
          boxShadow: hovering
            ? "0 14px 40px rgba(34,211,238,0.55)"
            : "0 8px 24px rgba(34,211,238,0.3)",
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${hovering ? 1.06 : 1})`,
          transition: hovering ? "box-shadow 0.2s" : "transform 0.45s cubic-bezier(0.2,0.9,0.3,1.4), box-shadow 0.2s",
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: 2, display: "block", opacity: 0.7 }}>PRO TIER</span>
        Magnetic
      </button>
    </div>
  );
}
