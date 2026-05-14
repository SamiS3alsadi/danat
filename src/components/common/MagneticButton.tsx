"use client";

import { useRef, useCallback, ReactNode } from "react";

interface MagneticButtonProps {
    children: ReactNode;
    strength?: number; // max translation in px (default 12)
    className?: string;
}

/**
 * Wraps a clickable element and translates it toward the cursor on hover.
 * Auto-disables on touch devices and when prefers-reduced-motion is set.
 */
const MagneticButton = ({ children, strength = 12, className }: MagneticButtonProps) => {
    const wrapRef = useRef<HTMLSpanElement | null>(null);
    const innerRef = useRef<HTMLSpanElement | null>(null);
    const rafId = useRef<number | null>(null);

    const isDisabled = useCallback(() => {
        if (typeof window === "undefined") return true;
        return (
            window.matchMedia("(hover: none)").matches ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        );
    }, []);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLSpanElement>) => {
            if (isDisabled() || !wrapRef.current || !innerRef.current) return;
            const rect = wrapRef.current.getBoundingClientRect();
            const dx = e.clientX - (rect.left + rect.width / 2);
            const dy = e.clientY - (rect.top + rect.height / 2);
            // Normalise to [-1,1] relative to half-width/height, then scale by strength
            const tx = Math.max(-1, Math.min(1, dx / (rect.width / 2))) * strength;
            const ty = Math.max(-1, Math.min(1, dy / (rect.height / 2))) * strength;
            if (rafId.current) cancelAnimationFrame(rafId.current);
            rafId.current = requestAnimationFrame(() => {
                if (innerRef.current) {
                    innerRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
                }
            });
        },
        [isDisabled, strength]
    );

    const handleMouseLeave = useCallback(() => {
        if (rafId.current) cancelAnimationFrame(rafId.current);
        if (innerRef.current) {
            innerRef.current.style.transform = "translate3d(0, 0, 0)";
        }
    }, []);

    return (
        <span
            ref={wrapRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{ display: "inline-flex" }}
        >
            <span ref={innerRef} className="magnetic-wrap">
                {children}
            </span>
        </span>
    );
};

export default MagneticButton;
