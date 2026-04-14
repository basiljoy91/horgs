"use client";

import { useEffect, useRef, useState } from "react";

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 800px)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    let frame = 0;

    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (
        el.closest("a, button, .btn, .gallery-card, .editorial-card, .product-card, .ingredient-card, .composition-card, .principle-card, .testimonial-stage")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (
        el.closest("a, button, .btn, .gallery-card, .editorial-card, .product-card, .ingredient-card, .composition-card, .principle-card, .testimonial-stage")
      ) {
        setIsHovering(false);
      }
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;

      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      dot.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isVisible ? "is-visible" : ""} ${isHovering ? "is-hovering" : ""} ${isClicking ? "is-clicking" : ""}`}
        aria-hidden="true"
      />
      <div
        ref={cursorDotRef}
        className={`custom-cursor-dot ${isVisible ? "is-visible" : ""} ${isHovering ? "is-hovering" : ""} ${isClicking ? "is-clicking" : ""}`}
        aria-hidden="true"
      />
    </>
  );
}
