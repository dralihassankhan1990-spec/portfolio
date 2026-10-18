"use client";
import React, { useState, useEffect, useRef } from "react";

const stats = [
  { label: "Projects shipped", value: 48, suffix: "+" },
  { label: "Happy clients", value: 32, suffix: "" },
  { label: "Code commits", value: 1200, suffix: "+" },
];

function useCountUp(target, run) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    setN(0);
    const start = performance.now();
    const dur = 1400;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return n;
}

export default function AnimatedCounter() {
  const [run, setRun] = useState(true);
  const ref = useRef(null);
  return (
    <div ref={ref} style={{ fontFamily: "system-ui, sans-serif", width: "100%", maxWidth: 340, padding: 12 }}>
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        {stats.map((s) => <Stat key={s.label} {...s} run={run} />)}
      </div>
      <div style={{ textAlign: "center", marginTop: 12 }}>
        <button onClick={() => setRun((r) => !r)}
          style={{ padding: "6px 18px", borderRadius: 999, border: "1px solid rgba(52,211,153,0.4)",
            background: "rgba(52,211,153,0.1)", color: "#34d399", cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
          {run ? "↻ Replay" : "▶ Play"}
        </button>
      </div>
    </div>
  );
}

function Stat({ label, value, suffix, run }) {
  const n = useCountUp(value, run);
  return (
    <div style={{ flex: 1, textAlign: "center", background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "12px 6px" }}>
      <div style={{ fontSize: 24, fontWeight: 800, background: "linear-gradient(90deg,#22d3ee,#34d399)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        {n.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 4 }}>{label}</div>
    </div>
  );
}
