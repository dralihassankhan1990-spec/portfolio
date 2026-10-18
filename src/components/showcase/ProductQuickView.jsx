"use client";
import React, { useState } from "react";

export default function ProductQuickView() {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const price = 2499;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", width: 230 }}>
      <div style={{ borderRadius: 14, overflow: "hidden", background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ height: 130, background: "linear-gradient(135deg,#0ea5e9,#8b5cf6)", position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 52 }}>🎧</span>
          <span style={{ position: "absolute", top: 8, left: 8, background: "#ef4444", color: "#fff",
            fontSize: 10, fontWeight: 800, padding: "3px 8px", borderRadius: 99 }}>-20%</span>
          <button onClick={() => setOpen(true)}
            style={{ position: "absolute", bottom: 8, right: 8, padding: "6px 12px", borderRadius: 99, border: "none",
              background: "rgba(0,0,0,0.55)", color: "#fff", fontSize: 11, fontWeight: 700, cursor: "pointer", backdropFilter: "blur(4px)" }}>
            👁 Quick View
          </button>
        </div>
        <div style={{ padding: "10px 14px 14px" }}>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>AeroBuds Pro</div>
          <div style={{ color: "#fbbf24", fontSize: 11 }}>★★★★★ <span style={{ color: "var(--text-muted)" }}>(214)</span></div>
          <div style={{ marginTop: 4 }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>PKR {price.toLocaleString()}</span>{" "}
            <span style={{ color: "var(--text-muted)", fontSize: 12, textDecoration: "line-through" }}>PKR 3,199</span>
          </div>
        </div>
      </div>

      {open && (
        <div onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 1500, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()}
            style={{ background: "#101828", borderRadius: 16, padding: 22, maxWidth: 380, width: "100%",
              border: "1px solid rgba(34,211,238,0.25)", position: "relative" }}>
            <button onClick={() => setOpen(false)}
              style={{ position: "absolute", top: 10, right: 12, background: "none", border: "none",
                color: "var(--text-muted)", fontSize: 20, cursor: "pointer" }}>✕</button>
            <div style={{ height: 140, borderRadius: 12, background: "linear-gradient(135deg,#0ea5e9,#8b5cf6)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64 }}>🎧</div>
            <h4 style={{ color: "#fff", margin: "12px 0 4px" }}>AeroBuds Pro — Wireless Earbuds</h4>
            <p style={{ color: "var(--text-muted)", fontSize: 12 }}>
              Active noise cancellation, 36-hour battery, Bluetooth 5.3, IPX5 water resistant.
            </p>
            <div style={{ color: "#fbbf24", fontSize: 12 }}>★★★★★ 214 reviews</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "12px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={qbtn}>−</button>
                <span style={{ color: "#fff", fontWeight: 800 }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={qbtn}>+</button>
              </div>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>PKR {(price * qty).toLocaleString()}</span>
            </div>
            <button style={{ width: "100%", padding: 12, borderRadius: 10, border: "none", cursor: "pointer",
              background: "linear-gradient(90deg,#22d3ee,#0ea5e9)", color: "#062026", fontWeight: 800, fontSize: 14 }}>
              🛒 Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
const qbtn = {
  width: 28, height: 28, borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.06)", color: "#fff", cursor: "pointer", fontSize: 15, fontWeight: 800,
};
