"use client";
import React, { useState } from "react";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DOW = ["Su","Mo","Tu","We","Th","Fr","Sa"];

export default function DatePicker() {
  const today = new Date();
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const [sel, setSel] = useState(today.getDate());

  const first = new Date(view.y, view.m, 1).getDay();
  const days = new Date(view.y, view.m + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
  const nav = (d) => {
    const m = view.m + d;
    setView({ y: view.y + Math.floor(m / 12), m: ((m % 12) + 12) % 12 });
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", width: 280, background: "#0b1220",
      border: "1px solid rgba(34,211,238,0.25)", borderRadius: 14, padding: 14, boxShadow: "0 16px 40px rgba(0,0,0,0.45)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <button onClick={() => nav(-1)} style={arrow}>‹</button>
        <span style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>{MONTHS[view.m]} {view.y}</span>
        <button onClick={() => nav(1)} style={arrow}>›</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2, textAlign: "center" }}>
        {DOW.map((d) => <span key={d} style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 700, padding: "4px 0" }}>{d}</span>)}
        {cells.map((d, i) => d === null ? <span key={"e" + i} /> : (
          <button key={i} onClick={() => setSel(d)}
            style={{
              aspectRatio: "1", border: "none", borderRadius: "50%", cursor: "pointer", fontSize: 12, fontWeight: 600,
              background: d === sel ? "linear-gradient(135deg,#22d3ee,#0ea5e9)" : "transparent",
              color: d === sel ? "#062026" : "#e5e7eb", transition: "all 0.15s",
            }}
            onMouseEnter={(e) => { if (d !== sel) e.target.style.background = "rgba(34,211,238,0.15)"; }}
            onMouseLeave={(e) => { if (d !== sel) e.target.style.background = "transparent"; }}
          >{d}</button>
        ))}
      </div>
      <div style={{ marginTop: 10, textAlign: "center", fontSize: 12, color: "var(--text-muted)" }}>
        Selected: <strong style={{ color: "#22d3ee" }}>{sel} {MONTHS[view.m].slice(0,3)} {view.y}</strong>
      </div>
    </div>
  );
}
const arrow = {
  width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(34,211,238,0.35)",
  background: "rgba(34,211,238,0.08)", color: "#22d3ee", cursor: "pointer", fontSize: 15, fontWeight: 800,
};
