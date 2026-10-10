"use client";
import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [target] = useState(() => Date.now() + 2 * 24 * 60 * 60 * 1000);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const units = [
    { v: d, l: "Days" },
    { v: h, l: "Hours" },
    { v: m, l: "Mins" },
    { v: s, l: "Secs" },
  ];

  return (
    <div
      style={{
        borderRadius: 20,
        padding: 22,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(251,191,36,0.3)",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 12, letterSpacing: 2, fontWeight: 800, color: "#fbbf24", marginBottom: 14 }}>
        ⏳ LIMITED OFFER ENDS IN
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        {units.map((u) => (
          <div
            key={u.l}
            style={{
              flex: 1,
              padding: "12px 4px",
              borderRadius: 12,
              background: "#0a0f1c",
              border: "1px solid rgba(34,211,238,0.25)",
              boxShadow: "inset 0 0 16px rgba(34,211,238,0.08)",
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 800, color: "#22d3ee", fontVariantNumeric: "tabular-nums" }}>
              {String(u.v).padStart(2, "0")}
            </div>
            <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 4, letterSpacing: 1 }}>{u.l.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
