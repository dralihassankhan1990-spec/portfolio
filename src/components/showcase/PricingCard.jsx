"use client";
import React from "react";

export default function PricingCard() {
  const features = ["5 pages", "Responsive design", "Contact form", "SEO setup", "2 revisions"];
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        borderRadius: 20,
        padding: "28px 22px",
        background: "rgba(255,255,255,0.04)",
        border: "2px solid #fbbf24",
        boxShadow: "0 0 30px rgba(251,191,36,0.18)",
        color: "#e5e7eb",
        fontFamily: "system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 16,
          right: -38,
          transform: "rotate(45deg)",
          background: "linear-gradient(90deg,#fbbf24,#f59e0b)",
          color: "#060a14",
          fontSize: 11,
          fontWeight: 800,
          padding: "6px 42px",
          letterSpacing: 1,
        }}
      >
        MOST POPULAR
      </div>
      <div style={{ fontSize: 13, color: "#9ca3af", letterSpacing: 2, fontWeight: 700 }}>STANDARD</div>
      <div style={{ margin: "10px 0" }}>
        <span style={{ fontSize: 38, fontWeight: 800, color: "#fff" }}>$299</span>
        <span style={{ color: "#9ca3af", fontSize: 13 }}> / project</span>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", margin: "14px 0" }} />
      {features.map((f) => (
        <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", fontSize: 13 }}>
          <span style={{ color: "#22d3ee", fontWeight: 800 }}>✓</span>
          <span>{f}</span>
        </div>
      ))}
      <button
        style={{
          marginTop: 18,
          width: "100%",
          padding: "13px",
          borderRadius: 12,
          border: "none",
          cursor: "pointer",
          fontWeight: 800,
          fontSize: 14,
          color: "#060a14",
          background: "linear-gradient(90deg,#fbbf24,#f59e0b)",
        }}
      >
        Get Started
      </button>
    </div>
  );
}
