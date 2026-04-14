"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  ["About", "#about"],
  ["Philosophy", "#philosophy"],
  ["Ingredients", "#ingredients"],
  ["Products", "#products"],
  ["Gallery", "#gallery"],
  ["Voices", "#testimonials"],
  ["Contact", "#contact"],
] as const;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={`mobile-menu-btn ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className="mobile-menu-btn__line" />
        <span className="mobile-menu-btn__line" />
        <span className="mobile-menu-btn__line" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              className="mobile-nav-panel"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile navigation"
            >
              <div className="mobile-nav-panel__header">
                <span className="mobile-nav-panel__brand">Herbs Atelier</span>
              </div>
              <div className="mobile-nav-panel__links">
                {navItems.map(([label, href], index) => (
                  <motion.a
                    key={href}
                    href={href}
                    className="mobile-nav-link"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.5,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                  >
                    <span className="mobile-nav-link__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mobile-nav-link__label">{label}</span>
                  </motion.a>
                ))}
              </div>
              <div className="mobile-nav-panel__footer">
                <p>Luxury herbal storytelling</p>
                <a href="mailto:hello@herbsatelier.com">hello@herbsatelier.com</a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
