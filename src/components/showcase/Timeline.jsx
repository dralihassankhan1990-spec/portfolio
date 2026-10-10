"use client";
import React from "react";

const MILESTONES = [
  { year: "2018", title: "Joined PITB", text: "Started as Program Officer driving GovTech digital transformation." },
  { year: "2021", title: "MPhil Food Safety", text: "Completed MPhil in Food Safety & Control from UVAS." },
  { year: "2024", title: "PAFDA LIMS Lead", text: "Led the PKR 85M LIMS implementation as project lead." },
  { year: "2026", title: "AI Delivery", text: "Shipping AI-driven QA automation and portfolio products." },
];

export default function Timeline() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "8px 4px" }}>
      {MILESTONES.map((m, i) => (
        <div key={m.year} style={{ display: "flex", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#22d3ee,#0ea5e9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
                boxShadow: "0 0 14px rgba(34,211,238,0.5)",
                flexShrink: 0,
              }}
            >
              ✓
            </div>
            {i < MILESTONES.length - 1 && (
              <div style={{ width: 2, flex: 1, minHeight: 30, background: "linear-gradient(180deg,#22d3ee,#22d3ee33)", margin: "4px 0" }} />
            )}
          </div>
          <div style={{ paddingBottom: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: "#fbbf24" }}>{m.year}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: "3px 0" }}>{m.title}</div>
            <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.5 }}>{m.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
