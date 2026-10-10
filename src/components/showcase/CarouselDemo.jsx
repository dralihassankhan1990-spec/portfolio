"use client";
import React, { useState } from "react";

const SLIDES = [
  { title: "Design", text: "Pixel-perfect UI systems", bg: "linear-gradient(135deg,#0ea5e9,#6366f1)" },
  { title: "Develop", text: "Clean, tested code", bg: "linear-gradient(135deg,#8b5cf6,#d946ef)" },
  { title: "Deliver", text: "Ship with confidence", bg: "linear-gradient(135deg,#f59e0b,#ef4444)" },
];

export default function CarouselDemo() {
  const [idx, setIdx] = useState(0);
  const go = (d) => setIdx((i) => (i + d + SLIDES.length) % SLIDES.length);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 18, height: 190 }}>
        <div
          style={{
            display: "flex",
            height: "100%",
            transform: `translateX(-${idx * 100}%)`,
            transition: "transform 0.45s cubic-bezier(0.2,0.8,0.2,1)",
          }}
        >
          {SLIDES.map((s) => (
            <div
              key={s.title}
              style={{
                minWidth: "100%",
                height: "100%",
                background: s.bg,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <div style={{ fontSize: 11, letterSpacing: 3, fontWeight: 700, opacity: 0.85 }}>PRO TIER</div>
              <div style={{ fontSize: 30, fontWeight: 800, margin: "6px 0" }}>{s.title}</div>
              <div style={{ fontSize: 13, opacity: 0.9 }}>{s.text}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => go(-1)}
          style={arrowBtn("left")}
        >
          ‹
        </button>
        <button
          onClick={() => go(1)}
          style={arrowBtn("right")}
        >
          ›
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 12 }}>
        {SLIDES.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setIdx(i)}
            style={{
              width: i === idx ? 26 : 9,
              height: 9,
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              background: i === idx ? "#22d3ee" : "rgba(255,255,255,0.2)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function arrowBtn(side) {
  return {
    position: "absolute",
    top: "50%",
    [side]: 10,
    transform: "translateY(-50%)",
    width: 34,
    height: 34,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    background: "rgba(0,0,0,0.45)",
    color: "#fff",
    fontSize: 20,
    fontWeight: 800,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
  };
}
