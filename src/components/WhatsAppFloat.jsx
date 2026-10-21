"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WA_URL =
  "https://wa.me/923394056390?text=" +
  encodeURIComponent("Hi Bilal! I'm interested in your work.");

export default function WhatsAppFloat() {
  const [tip, setTip] = useState(false);
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setTip(true)}
      onMouseLeave={() => setTip(false)}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(37,211,102,0.45)",
        zIndex: 1000,
        animation: "waPulse 2.2s ease-out infinite",
      }}
    >
      <FaWhatsapp size={30} color="#fff" />
      {tip && (
        <span
          style={{
            position: "absolute",
            right: 66,
            top: "50%",
            transform: "translateY(-50%)",
            whiteSpace: "nowrap",
            background: "#0b1220",
            color: "#fff",
            fontSize: 12,
            fontWeight: 600,
            padding: "7px 12px",
            borderRadius: 8,
            border: "1px solid rgba(37,211,102,0.4)",
            pointerEvents: "none",
          }}
        >
          Chat on WhatsApp
        </span>
      )}
      <style>{`@keyframes waPulse {
        0% { box-shadow: 0 8px 24px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.5); }
        70% { box-shadow: 0 8px 24px rgba(37,211,102,0.45), 0 0 0 16px rgba(37,211,102,0); }
        100% { box-shadow: 0 8px 24px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0); }
      }`}</style>
    </a>
  );
}
