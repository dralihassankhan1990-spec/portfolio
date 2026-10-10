"use client";
import React, { useState } from "react";

const TABS = [
  { id: "design", label: "🎨 Design", content: "Pixel-perfect interfaces crafted with modern design systems, dark-mode first and fully responsive." },
  { id: "code", label: "💻 Code", content: "Clean, typed, tested code — React, Node.js and Python with CI pipelines and 90%+ coverage." },
  { id: "ship", label: "🚀 Ship", content: "Zero-downtime deployments on Vercel and cloud infra with monitoring from day one." },
];

export default function TabsDemo() {
  const [active, setActive] = useState("design");
  const current = TABS.find((t) => t.id === active);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <div
        style={{
          display: "flex",
          gap: 6,
          padding: 6,
          borderRadius: 14,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          marginBottom: 14,
        }}
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              flex: 1,
              padding: "10px 4px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 700,
              color: active === t.id ? "#060a14" : "#9ca3af",
              background: active === t.id ? "linear-gradient(90deg,#22d3ee,#0ea5e9)" : "transparent",
              transition: "all 0.25s ease",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div
        key={current.id}
        style={{
          borderRadius: 14,
          padding: 18,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(34,211,238,0.2)",
          animation: "tabFade 0.3s ease",
          fontSize: 13,
          color: "#d1d5db",
          lineHeight: 1.6,
        }}
      >
        <style>{`@keyframes tabFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        {current.content}
      </div>
    </div>
  );
}
