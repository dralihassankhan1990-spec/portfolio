"use client";
import React, { useState } from "react";

export default function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "24px 10px", fontFamily: "system-ui, sans-serif" }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "12px 30px",
          borderRadius: 999,
          border: "none",
          cursor: "pointer",
          fontWeight: 800,
          fontSize: 14,
          color: "#060a14",
          background: "linear-gradient(90deg,#fbbf24,#f59e0b)",
          boxShadow: "0 8px 24px rgba(251,191,36,0.35)",
        }}
      >
        Open Modal
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
            animation: "fadeIn 0.25s ease",
            padding: 20,
          }}
        >
          <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } @keyframes popIn { from { transform: scale(0.85) translateY(20px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }`}</style>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 320,
              borderRadius: 20,
              padding: 28,
              background: "#0b1220",
              border: "1px solid rgba(34,211,238,0.3)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(34,211,238,0.15)",
              animation: "popIn 0.3s cubic-bezier(0.2,0.9,0.3,1.2)",
              color: "#e5e7eb",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 44, marginBottom: 10 }}>🎉</div>
            <h3 style={{ margin: "0 0 8px", color: "#fff", fontSize: 18 }}>Pro Tier Unlocked</h3>
            <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.6, margin: "0 0 20px" }}>
              You now have access to all premium components, source code and lifetime updates.
            </p>
            <button
              onClick={() => setOpen(false)}
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                fontWeight: 800,
                fontSize: 14,
                color: "#060a14",
                background: "linear-gradient(90deg,#22d3ee,#0ea5e9)",
              }}
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
