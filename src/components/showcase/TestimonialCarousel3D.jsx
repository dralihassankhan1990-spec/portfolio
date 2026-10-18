"use client";
import React, { useState } from "react";

const items = [
  { quote: "Delivered two weeks early. The dashboard paid for itself in a month.", name: "Ahmed R.", role: "Operations Manager" },
  { quote: "Clean code, great communication. Our automation now saves 10 hrs/week.", name: "Sarah K.", role: "Startup Founder" },
  { quote: "The 3D portfolio alone won us three new clients. Worth every rupee.", name: "Bilal M.", role: "Agency Owner" },
];

export default function TestimonialCarousel3D() {
  const [idx, setIdx] = useState(0);
  const go = (d) => setIdx((i) => (i + d + items.length) % items.length);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", width: "100%", maxWidth: 360, padding: 8, textAlign: "center" }}>
      <div style={{ perspective: 900, height: 190, position: "relative", overflow: "hidden" }}>
        {items.map((t, i) => {
          const off = ((i - idx) % items.length + items.length) % items.length;
          const angle = off === 0 ? 0 : off === 1 ? 55 : -55;
          const z = off === 0 ? 0 : -160;
          const op = off === 0 ? 1 : 0.35;
          return (
            <div key={i}
              style={{
                position: "absolute", inset: "10px 30px", borderRadius: 14, padding: 16,
                background: "linear-gradient(135deg,rgba(34,211,238,0.12),rgba(139,92,246,0.12))",
                border: "1px solid rgba(34,211,238,0.25)", backdropFilter: "blur(8px)",
                transform: `rotateY(${angle}deg) translateZ(${z}px)`,
                opacity: op, transition: "all 0.6s cubic-bezier(0.3,1.1,0.4,1)",
                display: "flex", flexDirection: "column", justifyContent: "center",
              }}>
              <div style={{ color: "#fbbf24", fontSize: 14, letterSpacing: 3 }}>★★★★★</div>
              <p style={{ color: "#e5e7eb", fontSize: 12, fontStyle: "italic", margin: "8px 0" }}>"{t.quote}"</p>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#fff" }}>{t.name}</div>
              <div style={{ fontSize: 10, color: "var(--text-muted)" }}>{t.role}</div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 6 }}>
        <button onClick={() => go(-1)} style={nav}>‹</button>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {items.map((_, i) => (
            <span key={i} onClick={() => setIdx(i)} style={{ width: 8, height: 8, borderRadius: "50%", cursor: "pointer",
              background: i === idx ? "#22d3ee" : "rgba(255,255,255,0.2)" }} />
          ))}
        </div>
        <button onClick={() => go(1)} style={nav}>›</button>
      </div>
    </div>
  );
}
const nav = {
  width: 30, height: 30, borderRadius: "50%", border: "1px solid rgba(34,211,238,0.4)",
  background: "rgba(34,211,238,0.1)", color: "#22d3ee", cursor: "pointer", fontSize: 15, fontWeight: 800,
};
