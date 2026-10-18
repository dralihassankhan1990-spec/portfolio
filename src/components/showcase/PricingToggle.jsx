"use client";
import React, { useState } from "react";

const plans = [
  { name: "Starter", monthly: 0, yearly: 0, features: ["3 projects", "Community support"] },
  { name: "Pro", monthly: 29, yearly: 23, features: ["Unlimited projects", "Priority support", "Analytics"] },
  { name: "Team", monthly: 79, yearly: 63, features: ["Everything in Pro", "SSO", "Dedicated manager"] },
];

export default function PricingToggle() {
  const [yearly, setYearly] = useState(false);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 12, width: "100%", maxWidth: 340 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: !yearly ? "#fff" : "var(--text-muted)" }}>Monthly</span>
        <button
          onClick={() => setYearly(!yearly)}
          style={{
            width: 52, height: 28, borderRadius: 999, border: "none", cursor: "pointer", position: "relative",
            background: yearly ? "linear-gradient(90deg,#fbbf24,#f59e0b)" : "rgba(255,255,255,0.12)",
            transition: "background 0.3s",
          }}
        >
          <span style={{
            position: "absolute", top: 3, left: yearly ? 27 : 3, width: 22, height: 22, borderRadius: "50%",
            background: "#fff", transition: "left 0.3s cubic-bezier(0.3,1.4,0.5,1)", boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }} />
        </button>
        <span style={{ fontSize: 12, fontWeight: 700, color: yearly ? "#fff" : "var(--text-muted)" }}>
          Yearly <span style={{ color: "#34d399", fontSize: 10 }}>−20%</span>
        </span>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {plans.map((p) => (
          <div key={p.name} style={{
            flex: 1, borderRadius: 12, padding: 10, textAlign: "center",
            background: "rgba(255,255,255,0.04)", border: p.name === "Pro" ? "1px solid rgba(251,191,36,0.5)" : "1px solid rgba(255,255,255,0.1)",
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)" }}>{p.name}</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: "4px 0", transition: "all 0.3s" }} key={yearly ? "y" : "m"}>
              ${yearly ? p.yearly : p.monthly}
              <span style={{ fontSize: 10, fontWeight: 400, color: "var(--text-muted)" }}>/mo</span>
            </div>
            <div style={{ fontSize: 9, color: "var(--text-muted)" }}>{p.features[0]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
