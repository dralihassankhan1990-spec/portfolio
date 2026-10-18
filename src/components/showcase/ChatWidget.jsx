"use client";
import React, { useState } from "react";

const script = [
  { from: "bot", text: "Hi! How can I help you today?" },
  { from: "bot", text: "We offer web design, automation and AI tools." },
  { from: "user", text: "Do you build dashboards?" },
  { from: "bot", text: "Yes! I build custom analytics dashboards with React." },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(2);
  const [input, setInput] = useState("");
  const shown = script.slice(0, step);

  const send = () => {
    if (!input.trim()) return;
    setStep((s) => Math.min(s + 2, script.length));
    setInput("");
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", width: "100%", maxWidth: 280, position: "relative", minHeight: 300 }}>
      {open && (
        <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(34,211,238,0.3)", background: "#0b1220", boxShadow: "0 16px 40px rgba(0,0,0,0.5)" }}>
          <div style={{ background: "linear-gradient(90deg,#22d3ee,#0ea5e9)", padding: "10px 14px", color: "#062026", fontWeight: 800, fontSize: 13 }}>
            💬 Live Chat <span style={{ fontWeight: 400, fontSize: 11 }}>· online</span>
          </div>
          <div style={{ padding: 10, height: 170, overflow: "hidden", display: "flex", flexDirection: "column", gap: 6 }}>
            {shown.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                background: m.from === "user" ? "#22d3ee" : "rgba(255,255,255,0.08)",
                color: m.from === "user" ? "#062026" : "#e5e7eb",
                padding: "7px 11px", borderRadius: 12, fontSize: 12, maxWidth: "85%",
                animation: "chatIn 0.3s ease",
              }}>{m.text}</div>
            ))}
          </div>
          <div style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message…" style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", padding: "10px 12px", fontSize: 12 }} />
            <button onClick={send} style={{ background: "none", border: "none", color: "#22d3ee", fontSize: 16, padding: "0 12px", cursor: "pointer" }}>➤</button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)}
        style={{ position: "absolute", bottom: -8, right: 8, width: 46, height: 46, borderRadius: "50%", border: "none", cursor: "pointer",
          background: "linear-gradient(135deg,#22d3ee,#0ea5e9)", fontSize: 20, boxShadow: "0 8px 24px rgba(34,211,238,0.4)" }}>
        {open ? "✕" : "💬"}
      </button>
      <style>{`@keyframes chatIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}
