"use client";
import React, { useState, useEffect } from "react";

const BARS = [
  { label: "Project Delivery", value: 92, from: "#22d3ee", to: "#0ea5e9", striped: false },
  { label: "Client Satisfaction", value: 78, from: "#fbbf24", to: "#f59e0b", striped: true },
  { label: "On-time Sprints", value: 65, from: "#a78bfa", to: "#8b5cf6", striped: false },
];

export default function ProgressBar() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, fontFamily: "system-ui, sans-serif", padding: "6px 2px" }}>
      <style>{`@keyframes stripeMove { 0% { background-position: 0 0; } 100% { background-position: 28px 0; } }`}</style>
      {BARS.map((b) => (
        <div key={b.label}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 12, color: "#d1d5db", fontWeight: 600 }}>{b.label}</span>
            <span style={{ fontSize: 12, color: "#fbbf24", fontWeight: 800 }}>{b.value}%</span>
          </div>
          <div style={{ height: 12, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: animate ? `${b.value}%` : "0%",
                borderRadius: 999,
                backgroundImage: b.striped
                  ? `repeating-linear-gradient(45deg, rgba(255,255,255,0.28) 0 10px, transparent 10px 20px), linear-gradient(90deg, ${b.from}, ${b.to})`
                  : `linear-gradient(90deg, ${b.from}, ${b.to})`,
                animation: b.striped ? "stripeMove 1s linear infinite" : "none",
                transition: "width 1.2s cubic-bezier(0.2,0.8,0.2,1)",
                boxShadow: "0 0 12px rgba(34,211,238,0.35)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
