"use client";
import React from "react";

export default function GlassmorphismCard() {
  const stats = [
    { label: "Projects", value: "42" },
    { label: "Clients", value: "18" },
    { label: "Rating", value: "4.9" },
  ];
  return (
    <div
      style={{
        width: "100%",
        borderRadius: 20,
        padding: 24,
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(34,211,238,0.25)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
        color: "#e5e7eb",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#22d3ee,#818cf8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            fontWeight: 800,
            color: "#060a14",
            boxShadow: "0 0 18px rgba(34,211,238,0.55)",
          }}
        >
          MB
        </div>
        <div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>Muhammad Bilal</div>
          <div style={{ fontSize: 12, color: "#22d3ee" }}>Project Manager · GovTech</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "10px 4px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 800, color: "#fbbf24" }}>{s.value}</div>
            <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
