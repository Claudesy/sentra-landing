// Architected and built by Claudesy.
"use client";

import React from "react";
import { motion } from "framer-motion";

// --- AI Chatbox Wireframe Design ---
function AIChatboxVisual() {
  return (
    <div className="relative w-full h-full min-h-[420px] rounded-2xl border border-muted/15 bg-gradient-to-b from-[#141311] to-[#0d0d0d] overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-muted/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent/80" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent/80 font-jakarta">
            Sentra Engine
          </span>
        </div>
        <div className="ml-auto flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-muted/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-muted/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-muted/20" />
        </div>
      </div>

      {/* Chat messages */}
      <div className="p-5 flex flex-col gap-4">
        {/* User message */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-end"
        >
          <div className="max-w-[75%] px-4 py-2.5 rounded-xl rounded-br-sm border border-muted/15 bg-muted/5">
            <p className="text-[11px] text-foreground/80 leading-relaxed font-jakarta m-0">
              Pasien laki-laki, 45 tahun, nyeri dada kiri menjalar ke lengan sejak 2 jam
            </p>
          </div>
        </motion.div>

        {/* AI Response */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          <div className="max-w-[85%] px-4 py-3 rounded-xl rounded-bl-sm border border-accent/15 bg-accent/[0.03]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-accent/70">
                Analisis Klinis
              </span>
            </div>
            <p className="text-[11px] text-foreground/70 leading-relaxed font-jakarta m-0">
              Suspek Acute Coronary Syndrome — triase merah. Rekomendasi: EKG 12-lead segera, troponin serial, akses IV...
            </p>
          </div>
        </motion.div>

        {/* Diagnostic cards row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex gap-2"
        >
          <div className="flex-1 px-3 py-2.5 rounded-lg border border-[#E65A4C]/20 bg-[#E65A4C]/[0.04]">
            <span className="text-[8px] font-bold uppercase tracking-widest text-[#E65A4C]/70 block mb-1">
              Triase
            </span>
            <span className="text-[13px] font-bold text-[#E65A4C] font-jakarta">
              EMERGENCY
            </span>
          </div>
          <div className="flex-1 px-3 py-2.5 rounded-lg border border-muted/10 bg-muted/[0.03]">
            <span className="text-[8px] font-bold uppercase tracking-widest text-muted/50 block mb-1">
              Confidence
            </span>
            <span className="text-[13px] font-bold text-foreground/80 font-jakarta">
              94.7%
            </span>
          </div>
          <div className="flex-1 px-3 py-2.5 rounded-lg border border-muted/10 bg-muted/[0.03]">
            <span className="text-[8px] font-bold uppercase tracking-widest text-muted/50 block mb-1">
              DDx
            </span>
            <span className="text-[13px] font-bold text-foreground/80 font-jakarta">
              3
            </span>
          </div>
        </motion.div>

        {/* Typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.4 }}
          className="flex items-center gap-2 px-1"
        >
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: "0ms" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: "200ms" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: "400ms" }} />
          </div>
          <span className="text-[9px] text-muted/40 font-jakarta">
            Memproses protokol darurat...
          </span>
        </motion.div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal lines */}
        <div className="absolute top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-muted/[0.06] to-transparent" />
        <div className="absolute top-[50%] left-0 w-full h-px bg-gradient-to-r from-transparent via-muted/[0.04] to-transparent" />
        <div className="absolute top-[75%] left-0 w-full h-px bg-gradient-to-r from-transparent via-muted/[0.06] to-transparent" />
        {/* Vertical lines */}
        <div className="absolute top-0 left-[33%] w-px h-full bg-gradient-to-b from-transparent via-muted/[0.04] to-transparent" />
        <div className="absolute top-0 left-[66%] w-px h-full bg-gradient-to-b from-transparent via-muted/[0.04] to-transparent" />
        {/* Corner accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent/20 rounded-tl" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent/20 rounded-tr" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent/20 rounded-bl" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent/20 rounded-br" />
      </div>

      {/* Glow effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

// --- Main Hero Component ---
export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden border-b border-muted/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
          {/* Left Side */}
          <div className="flex flex-col gap-12">
            {/* 01, 02, 03 Points */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              {[
                { id: "01", text: "Patient Safety Net Real-Time" },
                { id: "02", text: "Specializing in clinical intelligence and decision support" },
                { id: "03", text: "Immutable Audit Trail + Human Authority" },
              ].map((point) => (
                <div key={point.id} className="flex flex-col gap-2">
                  <span className="text-xs font-bold tracking-widest text-accent font-jakarta">
                    {point.id}
                  </span>
                  <p className="text-xs font-medium tracking-widest text-muted uppercase max-w-[180px]">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Main Title */}
            <div className="flex flex-col gap-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[40px] md:text-[80px] lg:text-[100px] leading-[1] font-bold font-jakarta tracking-tighter text-foreground"
              >
                DIAGNOSE. <br />
                TREAT. REPEAT.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg text-muted max-w-[600px] leading-relaxed"
              >
                Sentra mentransformasi layanan kesehatan dengan kecerdasan klinis
                terintegrasi yang memberdayakan tenaga medis untuk mengambil
                keputusan secara lebih cepat, akurat, dan berbasis data.
              </motion.p>
            </div>

            {/* Quote — moved below title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[550px] border-l-2 border-accent/30 pl-6"
            >
              <p className="text-sm font-medium tracking-[0.04em] text-foreground/80 leading-[1.7] uppercase">
                &ldquo;Our technology exists for one purpose only: to honor the sacrifice
                of healthcare workers by giving them better tools than the problems
                they face.&rdquo;
              </p>
              <span className="text-muted text-sm mt-3 block font-jakarta">
                —Dr. Ferdi Iskandar
              </span>
            </motion.div>
          </div>

          {/* Right Side — AI Chatbox Wireframe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block sticky top-32"
          >
            <AIChatboxVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
