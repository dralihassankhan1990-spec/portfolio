"use client";
import React, { useState } from "react";

export default function AnimatedButton() {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    const id = Date.now();
    const ripple = { id, x: e.clientX - r.left - size / 2, y: e.clientY - r.top - size / 2, size };
    setRipples((prev) => [...prev, ripple]);
    setTimeout(() => setRipples((prev) => prev.filter((x) => x.id !== id)), 700);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px 0", fontFamily: "system-ui, sans-serif" }}>
      <button
        onClick={handleClick}
        style={{
          position: "relative",
          overflow: "hidden",
          border: "none",
          cursor: "pointer",
          padding: "14px 42px",
          borderRadius: 999,
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: 1,
          color: "#060a14",
          background: "linear-gradient(90deg,#22d3ee,#34d399)",
          boxShadow: "0 8px 24px rgba(34,211,238,0.35)",
          transition: "transform 0.15s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <span
          style={{
            position: "absolute",
            top: 0,
            left: "-80%",
            width: "50%",
            height: "100%",
            background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.65), transparent)",
            transform: "skewX(-20deg)",
            animation: "shineSweep 2.8s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <style>{`@keyframes shineSweep { 0% { left: -80%; } 60%, 100% { left: 130%; } }`}</style>
        {ripples.map((r) => (
          <span
            key={r.id}
            style={{
              position: "absolute",
              left: r.x,
              top: r.y,
              width: r.size,
              height: r.size,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.55)",
              animation: "rippleOut 0.65s ease-out forwards",
              pointerEvents: "none",
            }}
          />
        ))}
        <style>{`@keyframes rippleOut { from { transform: scale(0); opacity: 0.8; } to { transform: scale(2.4); opacity: 0; } }`}</style>
        <span style={{ position: "relative", zIndex: 1 }}>Click Me</span>
      </button>
    </div>
  );
}
