"use client";
import React, { useState } from "react";

const presets = [
  { name: "Ocean", css: "linear-gradient(90deg,#22d3ee,#3b82f6,#8b5cf6)" },
  { name: "Sunset", css: "linear-gradient(90deg,#f59e0b,#ef4444,#ec4899)" },
  { name: "Forest", css: "linear-gradient(90deg,#34d399,#10b981,#84cc16)" },
  { name: "Gold", css: "linear-gradient(90deg,#fbbf24,#f59e0b,#fde68a)" },
];

export default function GradientTextAnimator() {
  const [p, setP] = useState(0);
  const [text, setText] = useState("Your headline here");
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", width: "100%", maxWidth: 360, padding: 14, textAlign: "center" }}>
      <h3
        style={{
          fontSize: 30, fontWeight: 900, margin: "8px 0 16px", background: presets[p].css,
          backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          animation: "gradShift 3s linear infinite",
        }}
      >
        {text}
      </h3>
      <input value={text} onChange={(e) => setText(e.target.value.slice(0, 28))} placeholder="Type your headline…"
        style={{ width: "100%", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.05)", color: "#fff", fontSize: 13, outline: "none", marginBottom: 10 }} />
      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        {presets.map((pr, i) => (
          <button key={pr.name} onClick={() => setP(i)} title={pr.name}
            style={{ width: 34, height: 34, borderRadius: "50%", border: i === p ? "2px solid #fff" : "2px solid transparent",
              background: pr.css, cursor: "pointer" }} />
        ))}
      </div>
      <style>{`@keyframes gradShift { to { background-position: 200% center; } }`}</style>
    </div>
  );
}
