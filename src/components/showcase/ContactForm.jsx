"use client";
import React, { useState } from "react";

function FloatingField({ label, type = "text", textarea = false, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;
  const shared = {
    width: "100%",
    boxSizing: "border-box",
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${focused ? "#22d3ee" : "rgba(255,255,255,0.14)"}`,
    borderRadius: 12,
    padding: "16px 14px 8px",
    fontSize: 14,
    color: "#fff",
    outline: "none",
    fontFamily: "system-ui, sans-serif",
    transition: "border-color 0.2s",
  };
  return (
    <div style={{ position: "relative", marginBottom: 14 }}>
      {textarea ? (
        <textarea rows={3} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={{ ...shared, resize: "none" }} />
      ) : (
        <input type={type} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={shared} />
      )}
      <label
        style={{
          position: "absolute",
          left: 14,
          top: active ? 5 : 15,
          fontSize: active ? 10 : 14,
          color: focused ? "#22d3ee" : "#9ca3af",
          pointerEvents: "none",
          transition: "all 0.2s ease",
          letterSpacing: active ? 1 : 0,
          fontWeight: active ? 700 : 400,
        }}
      >
        {label.toUpperCase()}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        borderRadius: 20,
        padding: 22,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(34,211,238,0.2)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h3 style={{ margin: "0 0 16px", color: "#fff", fontSize: 17 }}>Get In Touch</h3>
      {sent ? (
        <div style={{ textAlign: "center", padding: "24px 0", color: "#22d3ee", fontWeight: 700 }}>
          <div style={{ fontSize: 34, marginBottom: 8 }}>✓</div>
          Message sent! I'll reply soon.
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <FloatingField label="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <FloatingField label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FloatingField label="Your Message" textarea value={msg} onChange={(e) => setMsg(e.target.value)} />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 13,
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              fontWeight: 800,
              fontSize: 14,
              color: "#060a14",
              background: "linear-gradient(90deg,#22d3ee,#0ea5e9)",
            }}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
