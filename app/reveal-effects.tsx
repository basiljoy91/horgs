"use client";

import { useEffect } from "react";

export function RevealEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    const parallaxItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    revealItems.forEach((item, index) => {
      item.style.setProperty("--delay", `${Math.min(index * 70, 420)}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    let ticking = false;

    const updateParallax = () => {
      const viewportCenter = window.innerHeight / 2;

      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.parallax || 0);
        const rect = item.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = elementCenter - viewportCenter;
        const shift = distance * speed * -0.12;

        item.style.setProperty("--parallax-y", `${shift.toFixed(2)}px`);
      });

      ticking = false;
    };

    const requestParallaxFrame = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestParallaxFrame, { passive: true });
    window.addEventListener("resize", requestParallaxFrame);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", requestParallaxFrame);
      window.removeEventListener("resize", requestParallaxFrame);
    };
  }, []);

  return null;
}
