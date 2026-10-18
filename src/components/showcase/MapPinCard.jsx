"use client";
import React, { useState } from "react";

const spots = [
  { x: 30, y: 40, label: "Lahore HQ", info: "Main office · 9am–6pm" },
  { x: 65, y: 60, label: "Karachi", info: "Branch · 9am–6pm" },
  { x: 48, y: 25, label: "Islamabad", info: "Liaison office" },
];

export default function MapPinCard() {
  const [sel, setSel] = useState(0);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", width: "100%", maxWidth: 340, padding: 8 }}>
      <div style={{ position: "relative", height: 190, borderRadius: 14, overflow: "hidden",
        background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)" }}>
        {/* grid lines */}
        {[20, 40, 60, 80].map((v) => (
          <div key={v} style={{ position: "absolute", top: 0, bottom: 0, left: `${v}%`, width: 1, background: "rgba(255,255,255,0.06)" }} />
        ))}
        {[25, 50, 75].map((v) => (
          <div key={v} style={{ position: "absolute", left: 0, right: 0, top: `${v}%`, height: 1, background: "rgba(255,255,255,0.06)" }} />
        ))}
        {spots.map((s, i) => (
          <button key={i} onClick={() => setSel(i)}
            style={{ position: "absolute", left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%,-100%)",
              background: "none", border: "none", cursor: "pointer", padding: 6 }}>
            <span style={{ position: "relative", display: "block" }}>
              <span style={{ position: "absolute", left: "50%", top: "50%", width: i === sel ? 34 : 22, height: i === sel ? 34 : 22,
                borderRadius: "50%", background: "rgba(239,68,68,0.25)", transform: "translate(-50%,-50%)",
                animation: "pinPulse 1.8s ease-out infinite" }} />
              <span style={{ position: "relative", fontSize: i === sel ? 30 : 22, filter: i === sel ? "drop-shadow(0 0 8px rgba(239,68,68,0.8))" : "grayscale(0.4)",
                transition: "all 0.25s" }}>📍</span>
            </span>
          </button>
        ))}
      </div>
      <div style={{ marginTop: 10, padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>{spots[sel].label}</div>
        <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{spots[sel].info}</div>
      </div>
      <style>{`@keyframes pinPulse { 0% { transform: translate(-50%,-50%) scale(0.5); opacity: 1; } 100% { transform: translate(-50%,-50%) scale(1.6); opacity: 0; } }`}</style>
    </div>
  );
}
