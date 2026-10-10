"use client";
import React from "react";

const BADGES = [
  { label: "Live", dot: "#34d399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.4)" },
  { label: "In Progress", dot: "#fbbf24", bg: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.4)" },
  { label: "New", dot: "#22d3ee", bg: "rgba(34,211,238,0.12)", border: "rgba(34,211,238,0.4)" },
  { label: "PRO", dot: "#fbbf24", bg: "linear-gradient(90deg,#fbbf24,#f59e0b)", border: "#fbbf24", solid: true },
  { label: "Beta", dot: "#a78bfa", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.4)" },
  { label: "Archived", dot: "#9ca3af", bg: "rgba(156,163,175,0.12)", border: "rgba(156,163,175,0.4)" },
];

export default function Badge() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        padding: "20px 14px",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {BADGES.map((b) => (
        <span
          key={b.label}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            padding: "7px 14px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: 0.5,
            background: b.bg,
            border: `1px solid ${b.border}`,
            color: b.solid ? "#060a14" : "#e5e7eb",
            boxShadow: b.solid ? "0 0 16px rgba(251,191,36,0.4)" : "none",
          }}
        >
          {!b.solid && (
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: b.dot,
                boxShadow: `0 0 8px ${b.dot}`,
              }}
            />
          )}
          {b.label.toUpperCase()}
        </span>
      ))}
    </div>
  );
}
