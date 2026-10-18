"use client";
import React, { useState, useEffect } from "react";

const tracks = [
  { title: "Midnight Drive", artist: "Neon Coast", dur: "3:24" },
  { title: "Pixel Dreams", artist: "Synthwave Co.", dur: "4:02" },
  { title: "Golden Hour", artist: "Lo-Fi Lab", dur: "2:58" },
];

export default function MusicPlayerCard() {
  const [playing, setPlaying] = useState(true);
  const [track, setTrack] = useState(0);
  const [prog, setProg] = useState(35);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setProg((p) => (p >= 100 ? 0 : p + 1)), 400);
    return () => clearInterval(t);
  }, [playing]);

  const next = (d) => { setTrack((t) => (t + d + tracks.length) % tracks.length); setProg(0); };
  const t = tracks[track];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", width: 270, borderRadius: 16, overflow: "hidden",
      background: "linear-gradient(160deg,#1a1033,#0b1220)", border: "1px solid rgba(139,92,246,0.3)",
      boxShadow: "0 16px 40px rgba(0,0,0,0.5)" }}>
      <div style={{ height: 120, background: "linear-gradient(135deg,#8b5cf6,#ec4899,#f59e0b)",
        display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 10, gap: 4 }}>
        {[...Array(24)].map((_, i) => (
          <span key={i} style={{
            width: 6, borderRadius: 3, background: "rgba(255,255,255,0.85)",
            height: playing ? `${10 + Math.abs(Math.sin(i * 1.7 + prog / 8)) * 46}px` : "8px",
            transition: "height 0.25s",
          }} />
        ))}
      </div>
      <div style={{ padding: "12px 16px 16px" }}>
        <div style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>{t.title}</div>
        <div style={{ color: "var(--text-muted)", fontSize: 11 }}>{t.artist} · {t.dur}</div>
        <div style={{ height: 4, borderRadius: 99, background: "rgba(255,255,255,0.1)", margin: "12px 0 4px", cursor: "pointer" }}
          onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); setProg(Math.round(((e.clientX - r.left) / r.width) * 100)); }}>
          <div style={{ height: "100%", width: `${prog}%`, borderRadius: 99, background: "linear-gradient(90deg,#8b5cf6,#ec4899)" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 18, marginTop: 10 }}>
          <button onClick={() => next(-1)} style={ctl}>⏮</button>
          <button onClick={() => setPlaying(!playing)}
            style={{ ...ctl, width: 46, height: 46, fontSize: 18, background: "linear-gradient(135deg,#8b5cf6,#ec4899)", color: "#fff", border: "none" }}>
            {playing ? "⏸" : "▶"}
          </button>
          <button onClick={() => next(1)} style={ctl}>⏭</button>
        </div>
      </div>
    </div>
  );
}
const ctl = {
  width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.06)", color: "#fff", cursor: "pointer", fontSize: 14,
};
