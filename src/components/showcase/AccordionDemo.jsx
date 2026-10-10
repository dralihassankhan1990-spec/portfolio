"use client";
import React, { useState, useRef, useEffect } from "react";

const ITEMS = [
  { title: "What is included in the free tier?", body: "Every component marked FREE includes full source code, inline styles and lifetime updates — no account needed." },
  { title: "How do I unlock pro components?", body: "Contact me for a one-time license. You get source code, Figma files and priority support on WhatsApp." },
  { title: "Can I use these in client work?", body: "Yes — both tiers include a commercial license. The only restriction is reselling the components themselves." },
];

function Item({ item, open, onToggle }) {
  const ref = useRef(null);
  const [h, setH] = useState(0);
  useEffect(() => {
    setH(open ? ref.current.scrollHeight : 0);
  }, [open ]);
  return (
    <div style={{ borderRadius: 14, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 16px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#fff",
          fontWeight: 700,
          fontSize: 13,
          textAlign: "left",
        }}
      >
        {item.title}
        <span style={{ color: "#22d3ee", fontSize: 18, transform: open ? "rotate(45deg)" : "none", transition: "transform 0.25s" }}>+</span>
      </button>
      <div style={{ height: h, overflow: "hidden", transition: "height 0.3s ease" }}>
        <div ref={ref} style={{ padding: "0 16px 16px", fontSize: 12, color: "#9ca3af", lineHeight: 1.6 }}>
          {item.body}
        </div>
      </div>
    </div>
  );
}

export default function AccordionDemo() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: "system-ui, sans-serif" }}>
      {ITEMS.map((item, i) => (
        <Item key={item.title} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
      ))}
    </div>
  );
}
