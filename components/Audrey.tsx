"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// --- Audrey color palette ---
const AUD = {
  amber: "#C4956A",       // Audrey's identity — warm copper/amber
  amberMuted: "#C4956A80", // 50% opacity
  amberFaint: "#C4956A15", // Subtle backgrounds
  amberGlow: "#C4956A08",  // Ultra-faint glow
  teal: "#6B9B8A",         // Confidence badges
  tealFaint: "#6B9B8A18",
} as const;

// --- Simulated conversation data ---
const conversation = [
  {
    role: "user" as const,
    text: "Pasien perempuan 32 tahun, nyeri perut kanan bawah sejak 12 jam, mual, demam 38.2°C",
    delay: 0.3,
  },
  {
    role: "audrey" as const,
    text: "Menganalisis presentasi klinis...",
    delay: 1.2,
    isThinking: true,
  },
  {
    role: "audrey" as const,
    text: "Berdasarkan analisis Bayesian: Suspek Apendisitis Akut (LR+ 8.4). Alvarado Score: 7/10 — probabilitas tinggi. Rekomendasi: USG abdomen STAT, CBC + CRP, konsultasi bedah.",
    delay: 2.0,
    badges: [
      { label: "Apendisitis Akut", confidence: "87.3%" },
      { label: "Alvarado", value: "7/10" },
      { label: "Triase", value: "URGENT", accent: true },
    ],
  },
  {
    role: "user" as const,
    text: "Hasil lab: WBC 14.200, CRP 48, USG: aperistaltik tubular structure 8mm",
    delay: 4.5,
  },
  {
    role: "audrey" as const,
    text: "Konfirmasi diagnostik: Apendisitis Akut Non-Komplikata. Posterior probability meningkat ke 96.1%. Protokol pre-operatif diaktifkan. Dokumentasi rujukan bedah auto-generated.",
    delay: 5.5,
    badges: [
      { label: "Confirmed", confidence: "96.1%" },
      { label: "Pre-Op", value: "ACTIVE", accent: true },
    ],
  },
];

// --- Typing effect hook ---
function useTypingEffect(text: string, isActive: boolean, speed = 18) {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setDisplayed("");
      setIsDone(false);
      return;
    }
    setDisplayed("");
    setIsDone(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setIsDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, isActive, speed]);

  return { displayed, isDone };
}

// --- Radial pulse ring ---
function PulseRing({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute rounded-full border"
      style={{ borderColor: `${AUD.amber}15`, inset: `-${20 + delay * 40}px` }}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.15, 0.05, 0.15],
      }}
      transition={{
        duration: 4,
        delay: delay * 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// --- Chat message bubble ---
function ChatBubble({
  msg,
  index,
  isVisible,
}: {
  msg: (typeof conversation)[0];
  index: number;
  isVisible: boolean;
}) {
  const isUser = msg.role === "user";
  const { displayed, isDone } = useTypingEffect(
    msg.text,
    isVisible && !msg.isThinking,
    isUser ? 12 : 20
  );

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} gap-3`}
    >
      {!isUser && (
        <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-1" style={{ background: AUD.amberFaint, border: `1px solid ${AUD.amber}30` }}>
          <svg width="14" height="14" viewBox="0 0 65 65" fill="currentColor" style={{ color: AUD.amber }}>
            <path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" />
          </svg>
        </div>
      )}

      <div className={`max-w-[85%] flex flex-col gap-2 ${isUser ? "items-end" : "items-start"}`}>
        {/* Role label */}
        <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${isUser ? "text-muted/50" : ""}`} style={!isUser ? { color: AUD.amber } : undefined}>
          {isUser ? "Dokter" : "Audrey"}
        </span>

        {/* Message bubble */}
        <div
          className={`px-4 py-3 rounded-2xl text-[13px] leading-relaxed font-jakarta ${
            isUser
              ? "rounded-br-sm"
              : "rounded-bl-sm text-foreground/70"
          }`}
          style={!isUser
            ? { background: `${AUD.amber}06`, border: `1px solid ${AUD.amber}18` }
            : { background: '#F2EBE0', color: '#1a1510', boxShadow: `3px 3px 8px #050505, -2px -2px 6px #2a2a2a` }
          }
        >
          {msg.isThinking ? (
            <span className="flex items-center gap-2">
              <span className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: AUD.amberMuted }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
                  />
                ))}
              </span>
              <span className="text-[11px]" style={{ color: AUD.amberMuted }}>{msg.text}</span>
            </span>
          ) : (
            <>
              {displayed}
              {!isDone && (
                <motion.span
                  className="inline-block w-[2px] h-[14px] ml-0.5 align-middle"
                  style={{ background: AUD.amberMuted }}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              )}
            </>
          )}
        </div>

        {/* Badges */}
        {"badges" in msg && msg.badges && isDone && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap gap-1.5 mt-1"
          >
            {msg.badges.map((badge, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase font-jakarta ${
                  badge.accent
                    ? "bg-accent/15 text-accent border border-accent/20"
                    : ""
                }`}
                style={!badge.accent ? {
                  background: "confidence" in badge ? AUD.tealFaint : "rgba(183,171,152,0.04)",
                  border: "confidence" in badge ? `1px solid ${AUD.teal}25` : "1px solid rgba(183,171,152,0.1)",
                  color: "confidence" in badge ? AUD.teal : "rgba(183,171,152,0.6)",
                } : undefined}
              >
                {badge.label}
                {"confidence" in badge && (
                  <span style={{ color: AUD.teal }}>{badge.confidence}</span>
                )}
                {"value" in badge && !("confidence" in badge) && (
                  <span className={badge.accent ? "text-accent" : "text-foreground/80"}>
                    {badge.value}
                  </span>
                )}
              </span>
            ))}
          </motion.div>
        )}
      </div>

      {isUser && (
        <div className="shrink-0 w-7 h-7 rounded-full bg-foreground/[0.06] border border-muted/15 flex items-center justify-center mt-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/50">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      )}
    </motion.div>
  );
}

// --- Feature data ---
const features = [
  { title: "Analisis Bayesian Real-Time", desc: "Posterior probability dihitung instan dari gejala, prevalensi, dan faktor risiko pasien." },
  { title: "Auto-Dokumentasi Klinis", desc: "Catatan kunjungan, surat rujukan, dan ringkasan pemulangan di-generate otomatis." },
  { title: "Safety Gate Terintegrasi", desc: "Setiap output melewati validasi klinis multi-layer sebelum disajikan ke dokter." },
  { title: "Bahasa Natural Klinis", desc: "Mengerti narasi dokter Indonesia — slang medis, singkatan, dan terminologi lokal." },
  { title: "Respons < 2 Detik", desc: "Latency ultra-rendah untuk keputusan klinis yang time-critical di IGD." },
];

// --- Vertical typing feature list ---
function FeatureTypingList() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timers: NodeJS.Timeout[] = [];
    features.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleCount((p) => Math.max(p, i + 1)), 400 + i * 700));
    });
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <div ref={ref} className="flex flex-col gap-8 pt-4">
      {features.map((f, i) => {
        const isActive = i < visibleCount;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 12 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`${isActive ? "" : "opacity-0"}`}
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-[11px] font-bold tracking-[0.2em] font-jakarta" style={{ color: AUD.amberMuted }}>
                0{i + 1}
              </span>
              <h4 className="text-lg md:text-xl font-bold text-foreground font-jakarta tracking-tight">
                {f.title}
              </h4>
            </div>
            <p className="text-sm text-muted/60 leading-relaxed font-jakarta pl-9">
              {f.desc}
            </p>
            {i < features.length - 1 && (
              <div className="mt-6 h-px ml-8" style={{ background: `linear-gradient(to right, ${AUD.amber}15, transparent)` }} />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

// --- Main Audrey Section ---
export default function Audrey() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timers: NodeJS.Timeout[] = [];
    conversation.forEach((msg, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleMessages((prev) => Math.max(prev, i + 1));
        }, msg.delay * 1000)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 border-b border-muted/20 overflow-hidden"
    >
      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: `${AUD.amber}05` }} />
        {/* Bottom-right glow */}
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: `${AUD.amber}04` }} />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(183,171,152,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(183,171,152,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: AUD.amber }} />
            <span className="text-xs font-bold uppercase tracking-[0.25em] font-jakarta" style={{ color: AUD.amber }}>
              Audrey AI Assistant
            </span>
            <div className="w-12 h-px" style={{ background: `${AUD.amber}50` }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tighter font-jakarta max-w-[900px] mx-auto"
          >
            Your Clinical Co-Pilot,{" "}
            <span className="relative inline-block">
              <span className="text-[#C4956A]">Always On</span>
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-[2px]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ transformOrigin: "left", background: `linear-gradient(to right, ${AUD.amber}99, ${AUD.amber}, ${AUD.amber}99)` }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base text-muted max-w-[600px] mx-auto leading-relaxed font-jakarta"
          >
            Audrey memproses narasi klinis, menghitung probabilitas diagnostik,
            dan menghasilkan rekomendasi evidence-based — dalam hitungan detik.
          </motion.p>
        </div>

        {/* Main content: Chat demo + Features */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
          {/* Left: Live chat simulation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Chat container */}
            <div className="relative rounded-3xl border border-muted/10 bg-background overflow-hidden" style={{ boxShadow: `8px 8px 20px #050505, -8px -8px 20px #1a1a1a, inset 0 1px 0 rgba(255,255,255,0.02)` }}>
              {/* Pulse rings behind container */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <PulseRing delay={0} />
                <PulseRing delay={1} />
                <PulseRing delay={2} />
              </div>

              {/* Header bar */}
              <div className="relative flex items-center justify-between px-6 py-4 border-b border-muted/8">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: AUD.amberFaint, border: `1px solid ${AUD.amber}30` }}>
                      <svg width="16" height="16" viewBox="0 0 65 65" fill="currentColor" className="text-[#C4956A]">
                        <path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" />
                      </svg>
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-background" style={{ background: AUD.amber }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground font-jakarta tracking-tight">
                      Audrey
                    </h3>
                    <span className="text-[10px] font-medium font-jakarta" style={{ color: AUD.amberMuted }}>
                      Online — Ready
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted/30 font-jakarta">
                    Sentra Engine v3.5
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted/15" />
                    <div className="w-1.5 h-1.5 rounded-full bg-muted/15" />
                    <div className="w-1.5 h-1.5 rounded-full bg-muted/15" />
                  </div>
                </div>
              </div>

              {/* Chat messages area */}
              <div className="relative p-6 flex flex-col gap-5 min-h-[420px]">
                {conversation.map((msg, i) => (
                  <ChatBubble
                    key={i}
                    msg={msg}
                    index={i}
                    isVisible={i < visibleMessages}
                  />
                ))}
              </div>

              {/* Input bar */}
              <div className="relative px-6 py-4 border-t border-muted/8">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-muted/8 bg-foreground/[0.02]">
                  <span className="text-[12px] text-muted/30 font-jakarta flex-1">
                    Ketik gejala klinis atau pertanyaan...
                  </span>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: AUD.amberFaint }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: AUD.amberMuted }}>
                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-2 left-2 w-5 h-5 border-t border-l rounded-tl-lg pointer-events-none" style={{ borderColor: `${AUD.amber}12` }} />
              <div className="absolute top-2 right-2 w-5 h-5 border-t border-r rounded-tr-lg pointer-events-none" style={{ borderColor: `${AUD.amber}12` }} />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l rounded-bl-lg pointer-events-none" style={{ borderColor: `${AUD.amber}12` }} />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r rounded-br-lg pointer-events-none" style={{ borderColor: `${AUD.amber}12` }} />
            </div>
          </motion.div>

          {/* Right: Feature list with typing effect */}
          <FeatureTypingList />
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-muted/8 overflow-hidden bg-muted/5"
          style={{ boxShadow: `6px 6px 16px #050505, -6px -6px 16px #1a1a1a` }}
        >
          {[
            { number: "< 2s", label: "Rata-rata Respons" },
            { number: "144+", label: "Penyakit KKI Tercakup" },
            { number: "99.7%", label: "Uptime Tersedia" },
            { number: "0", label: "PHI Data Tersimpan" },
          ].map((stat, i) => (
            <div key={i} className="bg-background px-6 py-8 text-center">
              <span className="block text-2xl md:text-3xl font-bold font-jakarta tracking-tight" style={{ color: AUD.amber }}>
                {stat.number}
              </span>
              <span className="block text-[11px] text-muted/50 uppercase tracking-[0.15em] font-jakarta mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
