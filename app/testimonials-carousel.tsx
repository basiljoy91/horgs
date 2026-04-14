"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  author: string;
  imageUrl: string;
};

export function TestimonialsCarousel({
  items,
}: {
  items: readonly Testimonial[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5200);

    return () => window.clearInterval(id);
  }, [items.length]);

  const activeItem = items[activeIndex];

  const slideVariants = {
    enter: (d: number) => ({
      x: d > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
      filter: "blur(12px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (d: number) => ({
      x: d > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
      filter: "blur(12px)",
    }),
  };

  return (
    <section className="testimonial-stage" aria-label="Client testimonials">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.imageUrl}
          className="testimonial-stage__backdrop"
          aria-hidden="true"
          style={{
            backgroundImage: `linear-gradient(160deg, rgba(64, 70, 58, 0.74), rgba(196, 162, 130, 0.3)), url("${activeItem.imageUrl}")`,
          }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.03 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        />
      </AnimatePresence>

      <div className="testimonial-stage__panel">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.blockquote
            key={activeItem.author}
            className="testimonial-stage__quote"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.85, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.span
              className="testimonial-stage__icon"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            >
              ❝
            </motion.span>
            <p>"{activeItem.quote}"</p>
            <footer>
              <span className="testimonial-author-line" />
              {activeItem.author}
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="testimonial-stage__controls">
          <div
            className="testimonial-stage__dots"
            aria-label="Testimonial navigation"
          >
            {items.map((item, index) => (
              <button
                key={item.author}
                type="button"
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => goTo(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
          <div className="testimonial-stage__progress">
            <motion.div
              className="testimonial-stage__progress-bar"
              key={activeIndex}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5.2, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
