"use client";
import React, { useState, useRef } from "react";

export default function ImageCompareSlider() {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef(null);

  const move = (clientX) => {
    const r = wrapRef.current.getBoundingClientRect();
    setPos(Math.min(98, Math.max(2, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", width: "100%", maxWidth: 340, padding: 8 }}>
      <div
        ref={wrapRef}
        onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
        onClick={(e) => move(e.clientX)}
        style={{ position: "relative", height: 190, borderRadius: 14, overflow: "hidden", cursor: "ew-resize", userSelect: "none" }}
      >
        {/* After (full) */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0ea5e9,#22d3ee,#34d399)",
          display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "#062026" }}>
          <span style={{ fontSize: 40 }}>✨</span>
          <span style={{ fontWeight: 800, fontSize: 14 }}>AFTER</span>
          <span style={{ fontSize: 11, opacity: 0.75 }}>Polished · Vibrant · Sharp</span>
        </div>
        {/* Before (clipped) */}
        <div style={{ position: "absolute", inset: 0, width: `${pos}%`, overflow: "hidden",
          background: "linear-gradient(135deg,#1f2937,#374151)", borderRight: "3px solid #fff" }}>
          <div style={{ width: 340, height: 190, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "#9ca3af" }}>
            <span style={{ fontSize: 40 }}>🌫️</span>
            <span style={{ fontWeight: 800, fontSize: 14 }}>BEFORE</span>
            <span style={{ fontSize: 11, opacity: 0.75 }}>Dull · Flat · Noisy</span>
          </div>
        </div>
        {/* Handle */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 0 }}>
          <div style={{ position: "absolute", top: "50%", left: -19, transform: "translateY(-50%)", width: 38, height: 38,
            borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 800, color: "#0ea5e9", boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}>⇔</div>
        </div>
      </div>
      <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 11, marginTop: 8 }}>Drag the handle to compare</p>
    </div>
  );
}
