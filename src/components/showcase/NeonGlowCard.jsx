"use client";
import React from "react";

export default function NeonGlowCard() {
  return (
    <div style={{ padding: 6, fontFamily: "system-ui, sans-serif" }}>
      <style>{`@keyframes neonPulse { 0%, 100% { box-shadow: 0 0 18px rgba(34,211,238,0.5), 0 0 44px rgba(34,211,238,0.22), inset 0 0 18px rgba(34,211,238,0.08); } 50% { box-shadow: 0 0 30px rgba(34,211,238,0.85), 0 0 70px rgba(34,211,238,0.35), inset 0 0 24px rgba(34,211,238,0.14); } }`}</style>
      <div
        style={{
          borderRadius: 20,
          padding: 26,
          background: "#080d18",
          border: "2px solid #22d3ee",
          animation: "neonPulse 2.6s ease-in-out infinite",
          textAlign: "center",
          color: "#e5e7eb",
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 10, filter: "drop-shadow(0 0 12px rgba(34,211,238,0.8))" }}>⚡</div>
        <h3 style={{ margin: "0 0 8px", fontSize: 19, fontWeight: 800, color: "#fff", textShadow: "0 0 16px rgba(34,211,238,0.7)" }}>
          Neon Glow Card
        </h3>
        <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.6, margin: 0 }}>
          A pulsing neon border that commands attention — ideal for CTAs, limited offers and hero highlights.
        </p>
        <button
          style={{
            marginTop: 18,
            padding: "11px 30px",
            borderRadius: 999,
            border: "2px solid #22d3ee",
            background: "transparent",
            color: "#22d3ee",
            fontWeight: 800,
            fontSize: 13,
            cursor: "pointer",
            textShadow: "0 0 10px rgba(34,211,238,0.8)",
            boxShadow: "0 0 16px rgba(34,211,238,0.3), inset 0 0 12px rgba(34,211,238,0.12)",
          }}
        >
          Get This Effect
        </button>
      </div>
    </div>
  );
}
