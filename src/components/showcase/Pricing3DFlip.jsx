"use client";
import React, { useState } from "react";

const FEATURES = ["Source code included", "Figma design files", "Lifetime updates", "Priority support", "Commercial license"];

export default function Pricing3DFlip() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{ perspective: 1000, width: "100%", cursor: "pointer" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: 300,
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.7s cubic-bezier(0.2,0.8,0.2,1)",
        }}
      >
        {/* FRONT */}
        <div
          style={{
            ...face(),
            background: "rgba(255,255,255,0.04)",
            border: "2px solid #fbbf24",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div style={{ fontSize: 11, letterSpacing: 3, color: "#fbbf24", fontWeight: 700 }}>PRO TIER</div>
          <div style={{ fontSize: 13, color: "#9ca3af", letterSpacing: 2, fontWeight: 700, marginTop: 10 }}>PREMIUM</div>
          <div style={{ margin: "10px 0" }}>
            <span style={{ fontSize: 40, fontWeight: 800, color: "#fff" }}>$49</span>
            <span style={{ color: "#9ca3af", fontSize: 13 }}> / one-time</span>
          </div>
          <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 12 }}>Hover or tap to flip →</div>
        </div>
        {/* BACK */}
        <div
          style={{
            ...face(),
            background: "linear-gradient(135deg, rgba(34,211,238,0.14), rgba(99,102,241,0.12))",
            border: "2px solid #22d3ee",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", marginBottom: 12, letterSpacing: 1 }}>WHAT'S INSIDE</div>
          {FEATURES.map((f) => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", fontSize: 13, color: "#d1d5db" }}>
              <span style={{ color: "#fbbf24", fontWeight: 800 }}>★</span>
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function face() {
  return {
    position: "absolute",
    inset: 0,
    borderRadius: 20,
    padding: 28,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "system-ui, sans-serif",
    boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
  };
}
