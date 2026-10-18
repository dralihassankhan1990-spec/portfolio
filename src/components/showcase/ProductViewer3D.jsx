"use client";
import React, { useState } from "react";

const faces = [
  { label: "Front", bg: "linear-gradient(135deg,#22d3ee,#0ea5e9)", icon: "◈" },
  { label: "Side", bg: "linear-gradient(135deg,#34d399,#10b981)", icon: "⬢" },
  { label: "Back", bg: "linear-gradient(135deg,#fbbf24,#f59e0b)", icon: "⬣" },
  { label: "Top", bg: "linear-gradient(135deg,#a78bfa,#8b5cf6)", icon: "✦" },
];

export default function ProductViewer3D() {
  const [rot, setRot] = useState(0);
  const [active, setActive] = useState(0);
  const spin = (dir) => {
    setRot((r) => r + dir * 90);
    setActive((a) => (a + dir + faces.length) % faces.length);
  };
  return (
    <div style={{ textAlign: "center", fontFamily: "system-ui, sans-serif", padding: 12 }}>
      <div style={{ perspective: 700, height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            width: 110, height: 110, position: "relative", transformStyle: "preserve-3d",
            transform: `rotateY(${rot}deg)`, transition: "transform 0.7s cubic-bezier(0.3,1.2,0.4,1)",
          }}
        >
          {faces.map((f, i) => (
            <div key={i}
              style={{
                position: "absolute", inset: 0, background: f.bg, borderRadius: 14,
                transform: `rotateY(${i * 90}deg) translateZ(55px)`,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                color: "#062026", fontWeight: 800, backfaceVisibility: "hidden",
                boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
              }}>
              <span style={{ fontSize: 30 }}>{f.icon}</span>
              <span style={{ fontSize: 11, letterSpacing: 1 }}>{f.label.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 4 }}>
        <button onClick={() => spin(-1)} style={btn}>‹ Prev</button>
        <span style={{ color: "var(--text-muted)", fontSize: 12, alignSelf: "center" }}>{faces[active].label}</span>
        <button onClick={() => spin(1)} style={btn}>Next ›</button>
      </div>
    </div>
  );
}
const btn = {
  padding: "6px 14px", borderRadius: 999, border: "1px solid rgba(34,211,238,0.4)",
  background: "rgba(34,211,238,0.1)", color: "var(--text-primary)", cursor: "pointer", fontSize: 12, fontWeight: 700,
};
