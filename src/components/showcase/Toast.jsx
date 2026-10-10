"use client";
import React, { useState, useEffect } from "react";

export default function Toast() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div style={{ position: "relative", padding: "30px 10px", fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
      <button
        onClick={() => setVisible(true)}
        style={{
          padding: "12px 30px",
          borderRadius: 999,
          border: "1px solid rgba(34,211,238,0.5)",
          background: "rgba(34,211,238,0.1)",
          color: "#22d3ee",
          fontWeight: 800,
          fontSize: 14,
          cursor: "pointer",
        }}
      >
        Show Toast
      </button>
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          transform: `translateX(-50%) translateY(${visible ? "0" : "16px"})`,
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transition: "all 0.35s cubic-bezier(0.2,0.9,0.3,1.2)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 18px",
          borderRadius: 14,
          background: "rgba(6,20,18,0.92)",
          border: "1px solid rgba(52,211,153,0.5)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 18px rgba(52,211,153,0.25)",
          color: "#e5e7eb",
          fontSize: 13,
          whiteSpace: "nowrap",
          zIndex: 10,
        }}
      >
        <span
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "#34d399",
            color: "#060a14",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 13,
          }}
        >
          ✓
        </span>
        Message sent successfully!
      </div>
    </div>
  );
}
