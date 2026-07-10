"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: React.ReactNode;
  /** Delay in ms before the element animates in (useful for staggering). */
  delay?: number;
  /** Direction the element travels from. Default: "up". */
  direction?: "up" | "left" | "right" | "none";
  /** When true, animates the direct children in sequence instead of the container. */
  stagger?: boolean;
  /** Render as a different element/component. Default: "div". */
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  stagger = false,
  as: Tag = "div",
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who prefer reduced motion: show immediately, no transform.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;

  const classes = stagger
    ? `${styles.stagger} ${visible ? styles.visible : ""} ${className}`
    : `${styles.reveal} ${styles[direction]} ${
        visible ? styles.visible : ""
      } ${className}`;

  return (
    <Component
      ref={ref}
      className={classes}
      style={
        stagger
          ? style
          : { ...style, transitionDelay: visible ? `${delay}ms` : "0ms" }
      }
    >
      {children}
    </Component>
  );
}
