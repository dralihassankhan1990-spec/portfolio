"use client";
import React, { useState, useRef } from "react";

export default function FileDropzone() {
  const [files, setFiles] = useState([]);
  const [drag, setDrag] = useState(false);
  const inputRef = useRef(null);

  const addFiles = (list) => {
    const next = Array.from(list).slice(0, 3).map((f, i) => ({
      id: Date.now() + i, name: f.name || `file-${i + 1}.pdf`, size: f.size || 1024 * (120 + i * 340), progress: 0,
    }));
    setFiles((prev) => [...prev, ...next].slice(0, 3));
    next.forEach((f) => {
      const t = setInterval(() => {
        setFiles((prev) => prev.map((p) => {
          if (p.id !== f.id) return p;
          const np = Math.min(100, p.progress + 12);
          if (np >= 100) clearInterval(t);
          return { ...p, progress: np };
        }));
      }, 180);
    });
  };

  const fmt = (b) => (b > 1048576 ? `${(b / 1048576).toFixed(1)} MB` : `${Math.round(b / 1024)} KB`);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", width: "100%", maxWidth: 340, padding: 8 }}>
      <div
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); addFiles(e.dataTransfer.files); }}
        style={{
          border: `2px dashed ${drag ? "#22d3ee" : "rgba(255,255,255,0.2)"}`, borderRadius: 14, padding: "26px 16px",
          textAlign: "center", cursor: "pointer", background: drag ? "rgba(34,211,238,0.08)" : "rgba(255,255,255,0.02)",
          transition: "all 0.2s",
        }}
      >
        <div style={{ fontSize: 32 }}>📤</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 6 }}>
          {drag ? "Drop files here" : "Drag & drop or click to browse"}
        </div>
        <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Max 3 files · simulated upload</div>
        <input ref={inputRef} type="file" multiple hidden onChange={(e) => addFiles(e.target.files)} />
      </div>
      <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
        {files.map((f) => (
          <div key={f.id} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "8px 12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span style={{ color: "#fff", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 180 }}>📄 {f.name}</span>
              <span style={{ color: f.progress >= 100 ? "#34d399" : "var(--text-muted)" }}>
                {f.progress >= 100 ? "✓ Done" : `${f.progress}%`}
              </span>
            </div>
            <div style={{ height: 6, borderRadius: 99, background: "rgba(255,255,255,0.08)", marginTop: 6, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${f.progress}%`, borderRadius: 99,
                background: "linear-gradient(90deg,#22d3ee,#34d399)", transition: "width 0.18s" }} />
            </div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>{fmt(f.size)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
