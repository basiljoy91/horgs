"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26, scale: 0.985, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{
        duration: 1.05,
        delay,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

type TextRevealProps = {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
};

export function TextReveal({
  text,
  className,
  tag: Tag = "h2",
  delay = 0,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="word-wrap">
          <motion.span
            className="word-reveal"
            initial={{ y: "110%", rotateX: -45, opacity: 0 }}
            whileInView={{ y: "0%", rotateX: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.9,
              delay: delay + wordIndex * 0.06,
              ease: [0.19, 1, 0.22, 1],
            }}
          >
            {word}
          </motion.span>
          {wordIndex < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

export function StaggerChildren({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: StaggerChildrenProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 1.1,
            ease: [0.19, 1, 0.22, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type CountUpProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: CountUpProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {prefix}
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        >
          {end}
        </motion.span>
        {suffix}
      </motion.span>
    </motion.span>
  );
}

export function ParallaxImage({
  src,
  alt,
  className,
  speed = 0.15,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) {
  return (
    <motion.div
      className={`parallax-image-wrap ${className || ""}`}
      initial={{ scale: 1.15 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
    >
      <div
        className="parallax-image-inner"
        style={{
          backgroundImage: `url("${src}")`,
        }}
      />
    </motion.div>
  );
}
