"use client";
import React, { useState } from "react";

export default function ScrollReveal() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
      <button
        onClick={() => setShow((s) => !s)}
        style={{
          padding: "11px 28px",
          borderRadius: 999,
          border: "1px solid rgba(34,211,238,0.5)",
          background: show ? "linear-gradient(90deg,#22d3ee,#0ea5e9)" : "rgba(34,211,238,0.08)",
          color: show ? "#060a14" : "#22d3ee",
          fontWeight: 800,
          fontSize: 13,
          cursor: "pointer",
          marginBottom: 14,
          transition: "all 0.25s",
        }}
      >
        {show ? "Hide Content" : "Reveal Content"}
      </button>
      <div
        style={{
          overflow: "hidden",
          maxHeight: show ? 400 : 0,
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.55s cubic-bezier(0.2,0.8,0.2,1)",
        }}
      >
        <div
          style={{
            borderRadius: 16,
            padding: 22,
            background: "linear-gradient(135deg, rgba(34,211,238,0.12), rgba(167,139,250,0.1))",
            border: "1px solid rgba(34,211,238,0.3)",
            textAlign: "left",
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 8 }}>✨ Revealed!</div>
          <p style={{ fontSize: 13, color: "#d1d5db", lineHeight: 1.7, margin: 0 }}>
            This content animates in with a smooth rise-and-fade — perfect for scroll-triggered sections, feature lists
            and portfolio case studies that unveil as visitors explore.
          </p>
        </div>
      </div>
    </div>
  );
}
