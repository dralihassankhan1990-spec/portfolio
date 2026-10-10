"use client";
import React, { useMemo } from "react";

export default function ParticleHero() {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        size: 3 + ((i * 7) % 6),
        delay: (i * 0.7) % 6,
        duration: 5 + ((i * 13) % 6),
        color: i % 3 === 0 ? "#fbbf24" : "#22d3ee",
        top: (i * 53) % 90,
      })),
    []
  );

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        borderRadius: 20,
        padding: "40px 20px",
        textAlign: "center",
        background: "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.16), #060a14 70%)",
        border: "1px solid rgba(34,211,238,0.25)",
        fontFamily: "system-ui, sans-serif",
        color: "#e5e7eb",
      }}
    >
      <style>{`@keyframes floatUp { 0% { transform: translateY(30px); opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateY(-90px); opacity: 0; } }`}</style>
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            opacity: 0,
            animation: `floatUp ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: "#fbbf24", fontWeight: 700 }}>PRO TIER</div>
        <h3 style={{ margin: "10px 0 6px", fontSize: 24, fontWeight: 800, color: "#fff" }}>
          Build Something <span style={{ color: "#22d3ee" }}>Extraordinary</span>
        </h3>
        <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>
          Pure-CSS floating particles — zero JavaScript animation cost.
        </p>
      </div>
    </div>
  );
}
