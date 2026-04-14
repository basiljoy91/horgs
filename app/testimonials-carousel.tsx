"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  author: string;
  imageClass: string;
};

export function TestimonialsCarousel({
  items,
}: {
  items: readonly Testimonial[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 4800);

    return () => window.clearInterval(id);
  }, [items.length]);

  const activeItem = items[activeIndex];

  return (
    <section className="testimonial-stage" aria-label="Client testimonials">
      <div className={`testimonial-stage__backdrop ${activeItem.imageClass}`} aria-hidden="true" />

      <div className="testimonial-stage__panel">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeItem.author}
            className="testimonial-stage__quote"
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <p>“{activeItem.quote}”</p>
            <footer>{activeItem.author}</footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="testimonial-stage__dots" aria-label="Testimonial navigation">
          {items.map((item, index) => (
            <button
              key={item.author}
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
