"use client";
import React from "react";

export default function TestimonialCard() {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: 20,
        padding: 24,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(34,211,238,0.2)",
        fontFamily: "system-ui, sans-serif",
        color: "#e5e7eb",
      }}
    >
      <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} style={{ color: "#fbbf24", fontSize: 18, textShadow: "0 0 8px rgba(251,191,36,0.6)" }}>
            ★
          </span>
        ))}
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.7, color: "#d1d5db", fontStyle: "italic", margin: "0 0 18px" }}>
        "This is placeholder review text demonstrating the layout. Replace it with a verified client testimonial before publishing."
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#fbbf24,#f59e0b)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            color: "#060a14",
            fontSize: 16,
          }}
        >
          SK
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Sample Reviewer</div>
          <div style={{ fontSize: 11, color: "#22d3ee" }}>Illustrative content only</div>
        </div>
      </div>
    </div>
  );
}
