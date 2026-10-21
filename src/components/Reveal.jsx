"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, className, variant = 'rise' }) {
    const ref = useRef(null);
    const reduced = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const rotateX = useTransform(scrollYProgress, [0, .4, .6, 1], [9, 0, 0, -5]);
    const rotateY = useTransform(scrollYProgress, [0, .5, 1], variant === 'left' ? [-8, 0, 4] : [8, 0, -4]);
    const y = useTransform(scrollYProgress, [0, .5, 1], [65, 0, -40]);
    const scale = useTransform(scrollYProgress, [0, .4, .65, 1], [.94, 1, 1, .97]);
    return (
        <div ref={ref} className={`scroll-stage ${className || ''}`}>
            <motion.div style={reduced ? {} : { rotateX: variant === 'rise' ? rotateX : 0, rotateY: variant === 'rise' ? 0 : rotateY, y, scale, transformPerspective: 1600 }}>
                <motion.div initial={reduced ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .08 }} transition={{ duration: .65, delay }}>
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
}
