"use client";
import React from "react";

function Bar({ w, h = 12 }) {
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: 999,
        background: "linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.06) 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmerMove 1.4s linear infinite",
      }}
    />
  );
}

export default function SkeletonLoader() {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: 20,
        padding: 22,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <style>{`@keyframes shimmerMove { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
      <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 16 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.06) 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmerMove 1.4s linear infinite",
          }}
        />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <Bar w="60%" />
          <Bar w="40%" h={10} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Bar w="100%" />
        <Bar w="92%" />
        <Bar w="75%" />
      </div>
    </div>
  );
}
