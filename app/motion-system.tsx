"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function MotionSystem() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      document.documentElement.classList.add("reduced-motion");
      return;
    }

    document.documentElement.classList.remove("reduced-motion");

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 0.9,
      autoRaf: false,
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTimeline
      .fromTo(
        ".hero-copy > *",
        {
          autoAlpha: 0,
          y: 34,
          filter: "blur(12px)",
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.25,
          stagger: 0.12,
        }
      )
      .fromTo(
        ".hero-photo-panel, .composition-card, .hero-orb",
        {
          autoAlpha: 0,
          y: 38,
          scale: 0.96,
          filter: "blur(14px)",
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.4,
          stagger: 0.1,
        },
        "-=0.95"
      );

    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          y: 34,
          scale: 0.985,
          filter: "blur(10px)",
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          delay: Math.min(index * 0.02, 0.16),
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
      const speed = Number(element.dataset.parallax || 0.1);

      gsap.to(element, {
        yPercent: speed * -42,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-panel-slide]").forEach((element, index) => {
      const direction = index % 2 === 0 ? -56 : 56;

      gsap.fromTo(
        element,
        {
          x: direction,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: true,
          },
        }
      );
    });

    gsap.to(".page-glow--left", {
      x: 36,
      y: -18,
      duration: 10,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".page-glow--right", {
      x: -28,
      y: 24,
      duration: 12,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".ambient-loop--light", {
      backgroundPosition: "54% 48%",
      duration: 18,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".ambient-loop--botanical", {
      backgroundPosition: "48% 56%",
      duration: 22,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".floating-particles", {
      backgroundPosition: "0 0, 20px 36px, 0 0",
      duration: 24,
      ease: "none",
      repeat: -1,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([
        ".hero-copy > *",
        ".hero-photo-panel, .composition-card, .hero-orb",
        ".page-glow--left",
        ".page-glow--right",
        ".ambient-loop--light",
        ".ambient-loop--botanical",
        ".floating-particles",
      ]);
    };
  }, []);

  return null;
}
