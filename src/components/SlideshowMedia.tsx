"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type SlideImage = { src: string; width: number; height: number };

const SHADOW =
  "0px 10px 10px -5px rgba(0,0,0,0.04), 0px 20px 25px -5px rgba(0,0,0,0.10)";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const slideVariants = {
  hidden: { x: 140, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// 24px at ~632px card width, 40px at ~1053px — matches design spec of 32px at 837px
const SIDE_MARGIN = "clamp(24px, 3.8%, 40px)";

const LEFTS  = [SIDE_MARGIN, "18.8%", "34.6%"];
const TOPS   = ["20.6%", "12.6%", "6.9%"];
const WIDTHS = ["22.8%", "22.9%", `calc(100% - 34.6% - ${SIDE_MARGIN})`];

export function SlideshowMedia({ images }: { images: SlideImage[] }) {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {images.map((img, i) => (
        <motion.div
          key={img.src}
          className="absolute overflow-hidden"
          style={{
            boxShadow: SHADOW,
            borderRadius: 12,
            left: LEFTS[i],
            top: TOPS[i],
            width: WIDTHS[i],
          }}
          variants={slideVariants}
        >
          <Image
            src={img.src}
            alt=""
            width={img.width}
            height={img.height}
            className="w-full h-auto rounded-[12px]"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
