"use client";
import React from "react";
import { motion } from "framer-motion";

/** Scroll-triggered reveal wrapper — fades + rises content once when it enters view. */
export default function Reveal({ children, delay = 0, y = 48, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
