"use client";
import React, { useState } from "react";

export default function ToggleSwitch() {
  const [on, setOn] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 20px",
        borderRadius: 16,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Dark Mode</div>
        <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 3 }}>
          {on ? "Eye-friendly night theme" : "Standard light theme"}
        </div>
      </div>
      <button
        onClick={() => setOn(!on)}
        aria-pressed={on}
        style={{
          width: 56,
          height: 30,
          borderRadius: 999,
          border: "none",
          cursor: "pointer",
          background: on ? "linear-gradient(90deg,#22d3ee,#0ea5e9)" : "rgba(255,255,255,0.15)",
          boxShadow: on ? "0 0 14px rgba(34,211,238,0.5)" : "inset 0 2px 4px rgba(0,0,0,0.3)",
          position: "relative",
          transition: "background 0.25s ease",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 3,
            left: on ? 29 : 3,
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "#fff",
            transition: "left 0.25s cubic-bezier(0.2,0.9,0.3,1.3)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}
        />
      </button>
    </div>
  );
}
