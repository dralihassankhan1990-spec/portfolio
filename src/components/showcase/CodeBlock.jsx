"use client";
import React, { useState } from "react";

const SAMPLE = `// Magnetic button — React
function follow(e) {
  const r = btn.getBoundingClientRect();
  const x = e.clientX - r.left - r.width / 2;
  const y = e.clientY - r.top - r.height / 2;
  btn.style.transform =
    \`translate(\${x * 0.3}px, \${y * 0.3}px)\`;
}`;

export default function CodeBlock() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SAMPLE);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = SAMPLE;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        width: "100%",
        borderRadius: 16,
        overflow: "hidden",
        background: "#0a0f1c",
        border: "1px solid rgba(34,211,238,0.25)",
        fontFamily: "ui-monospace, Menlo, monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {["#ef4444", "#fbbf24", "#34d399"].map((c) => (
            <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <button
          onClick={copy}
          style={{
            padding: "6px 14px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            fontSize: 12,
            fontWeight: 700,
            color: copied ? "#060a14" : "#22d3ee",
            background: copied ? "#34d399" : "rgba(34,211,238,0.12)",
            transition: "all 0.2s",
          }}
        >
          {copied ? "✓ Copied!" : "⧉ Copy"}
        </button>
      </div>
      <pre
        style={{
          margin: 0,
          padding: 16,
          fontSize: 11.5,
          lineHeight: 1.7,
          color: "#c4b5fd",
          overflowX: "auto",
          whiteSpace: "pre",
        }}
      >
        {SAMPLE}
      </pre>
    </div>
  );
}
