// Architected and built by Claudsy.
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/hero.jpg",
  "/hero2.jpg",
  "/hero3.png",
];

export default function ProjectSlider() {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <section className="py-20 border-b border-muted/20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <motion.div 
            className="flex h-full"
            animate={{ x: `-${current * 100}%` }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {images.map((src, i) => (
              <div key={i} className="min-w-full h-full relative">
                <Image 
                  src={src} 
                  alt={`Project ${i + 1}`} 
                  fill 
                  className="object-cover"
                  priority={i === 0}
                  unoptimized
                />
              </div>
            ))}
          </motion.div>

          {/* Controls */}
          <div className="absolute bottom-8 right-8 flex gap-4 z-10">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-muted/50 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-accent hover:text-background transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-muted/50 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-accent hover:text-background transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
