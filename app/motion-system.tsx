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
    const mm = gsap.matchMedia();

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
          duration: 1.45,
          stagger: 0.15,
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
          duration: 1.65,
          stagger: 0.14,
        },
        "-=1.05"
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
          duration: 1.35,
          delay: Math.min(index * 0.025, 0.2),
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    mm.add(
      {
        desktop: "(min-width: 801px)",
        mobile: "(max-width: 800px)",
      },
      (context) => {
        const { desktop } = context.conditions as { desktop?: boolean; mobile?: boolean };

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
          const speed = Number(element.dataset.parallax || 0.1);
          const travel = desktop ? -42 : -14;

          gsap.to(element, {
            yPercent: speed * travel,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: desktop ? 1.2 : 0.8,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-philosophy-pin]").forEach((element) => {
          const cards = element.querySelectorAll(".principle-card");

          if (desktop) {
            ScrollTrigger.create({
              trigger: element,
              start: "top top+=10%",
              end: "+=55%",
              pin: true,
              scrub: 0.9,
            });
          }

          cards.forEach((card, index) => {
            gsap.fromTo(
              card,
              {
                y: desktop ? index * 30 : 20,
                rotate: desktop ? (index % 2 === 0 ? -1.5 : 1.5) : 0,
              },
              {
                y: desktop ? index * -8 : 0,
                rotate: desktop ? (index % 2 === 0 ? 1 : -1) : 0,
                ease: "none",
                scrollTrigger: {
                  trigger: element,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: desktop ? 1.1 : 0.7,
                },
              }
            );
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-ritual-pin]").forEach((element) => {
          const layers = Array.from(
            element.querySelectorAll<HTMLElement>("[data-ritual-layer]")
          );
          const cards = Array.from(
            element.querySelectorAll<HTMLElement>("[data-ritual-card]")
          );

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start: desktop ? "top top+=10%" : "top top+=6%",
              end: desktop ? "+=150%" : "+=95%",
              pin: true,
              scrub: desktop ? 1 : 0.9,
            },
          });

          cards.forEach((card, index) => {
            if (index === 0) {
              card.classList.add("is-active");
            }
          });

          timeline
            .fromTo(
              layers[1],
              {
                xPercent: desktop ? -20 : -12,
                yPercent: desktop ? 12 : 8,
                opacity: 0.35,
              },
              {
                xPercent: desktop ? -4 : -2,
                yPercent: 0,
                opacity: 0.88,
                duration: 1,
              }
            )
            .fromTo(
              layers[2],
              {
                xPercent: desktop ? 18 : 10,
                yPercent: desktop ? -14 : -8,
                opacity: 0.22,
              },
              {
                xPercent: 0,
                yPercent: 0,
                opacity: 0.78,
                duration: 1,
              },
              0.08
            )
            .fromTo(
              layers[3],
              {
                scale: desktop ? 0.8 : 0.9,
                yPercent: desktop ? 18 : 12,
                filter: desktop ? "blur(10px)" : "blur(6px)",
                opacity: 0.3,
              },
              {
                scale: 1,
                yPercent: 0,
                filter: "blur(0px)",
                opacity: 1,
                duration: 1,
              },
              0.28
            )
            .fromTo(
              layers[4],
              {
                opacity: 0.12,
                scaleX: desktop ? 0.72 : 0.84,
              },
              {
                opacity: 0.68,
                scaleX: 1,
                duration: 1,
              },
              0.38
            );

          cards.forEach((card, index) => {
            ScrollTrigger.create({
              trigger: element,
              start: `${index * 33 + 8}% center`,
              end: `${index * 33 + 38}% center`,
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                gsap.to(card, {
                  opacity: 0.36 + progress * 0.64,
                  y: (1 - progress) * (desktop ? 18 : 10),
                  scale: 0.985 + progress * 0.015,
                  duration: 0.2,
                  overwrite: "auto",
                });
              },
              onEnter: () => card.classList.add("is-active"),
              onEnterBack: () => card.classList.add("is-active"),
              onLeave: () => {
                if (index < cards.length - 1) {
                  card.classList.remove("is-active");
                }
              },
              onLeaveBack: () => {
                if (index > 0) {
                  card.classList.remove("is-active");
                }
              },
            });
          });
        });
      }
    );

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
          duration: 1.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        }
      );
    });

    const hero = document.querySelector<HTMLElement>(".hero");
    const mouseDepthItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-mouse-depth]")
    );

    const handleMouseMove = (event: MouseEvent) => {
      if (!hero || mouseDepthItems.length === 0) {
        return;
      }

      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      mouseDepthItems.forEach((item) => {
        const depth = Number(item.dataset.mouseDepth || 0);
        gsap.to(item, {
          x: x * depth,
          y: y * depth,
          duration: 0.9,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    const resetMouseDepth = () => {
      mouseDepthItems.forEach((item) => {
        gsap.to(item, {
          x: 0,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    if (window.matchMedia("(min-width: 801px)").matches) {
      hero?.addEventListener("mousemove", handleMouseMove);
      hero?.addEventListener("mouseleave", resetMouseDepth);
    }

    gsap.to(".page-glow--left", {
      x: 36,
      y: -18,
      duration: 16,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".page-glow--right", {
      x: -28,
      y: 24,
      duration: 18,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".ambient-loop--light", {
      backgroundPosition: "54% 48%",
      duration: 26,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".ambient-loop--botanical", {
      backgroundPosition: "48% 56%",
      duration: 32,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".floating-particles", {
      backgroundPosition: "0 0, 20px 36px, 0 0",
      duration: 36,
      ease: "none",
      repeat: -1,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
      mm.revert();
      hero?.removeEventListener("mousemove", handleMouseMove);
      hero?.removeEventListener("mouseleave", resetMouseDepth);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([
        ".hero-copy > *",
        ".hero-photo-panel, .composition-card, .hero-orb",
        ".page-glow--left",
        ".page-glow--right",
        ".ambient-loop--light",
        ".ambient-loop--botanical",
        ".floating-particles",
        "[data-mouse-depth]",
      ]);
    };
  }, []);

  return null;
}
