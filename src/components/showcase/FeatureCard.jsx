"use client";
import React, { useState } from "react";

const FEATURES = [
  { icon: "⚡", title: "Blazing Fast", text: "Optimized builds with instant load times and 100 Lighthouse scores." },
  { icon: "🛡️", title: "Secure by Default", text: "Best-practice auth, encryption and hardened deployments." },
  { icon: "📊", title: "Analytics Ready", text: "Track every interaction with built-in event dashboards." },
];

export default function FeatureCard() {
  const [hovered, setHovered] = useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: "system-ui, sans-serif" }}>
      {FEATURES.map((f, i) => (
        <div
          key={f.title}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
            borderRadius: 16,
            padding: 16,
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${hovered === i ? "rgba(34,211,238,0.6)" : "rgba(255,255,255,0.08)"}`,
            boxShadow: hovered === i ? "0 0 24px rgba(34,211,238,0.28)" : "none",
            transform: hovered === i ? "translateY(-3px)" : "none",
            transition: "all 0.25s ease",
            cursor: "default",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              flexShrink: 0,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              background: hovered === i ? "linear-gradient(135deg,#22d3ee,#0ea5e9)" : "rgba(34,211,238,0.12)",
              transition: "background 0.25s",
            }}
          >
            {f.icon}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 4 }}>{f.title}</div>
            <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.5 }}>{f.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
