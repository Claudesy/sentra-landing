// Architected and built by Claudesy.
// [APPROVED]
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function SentraSim() {
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState("SENTRA / RSIA MELINDA // RM-88492-A // SENAUTO ENGINE: IDLE");
  const [headerColor, setHeaderColor] = useState("var(--sdx-text-muted)");
  const [anamnesaText, setAnamnesaText] = useState("batuk pilek, panas");
  const [anamnesaTags, setAnamnesaTags] = useState([false, false, false]);
  const [isEmrLoading, setIsEmrLoader] = useState(false);
  const [isHistoryLoaded, setIsHistoryLoaded] = useState(false);
  const [vitalsBlockVisible, setVitalsBlockVisible] = useState(false);
  const [vitalsTags, setVitalsTags] = useState([false, false, false, false, false]);
  const [labOpen, setLabOpen] = useState(false);
  const [labItemsSelected, setLabItemsSelected] = useState([false, false, false]);
  const [trajectoryActive, setTrajectoryActive] = useState(false);
  const [trajectoryInsightVisible, setTrajectoryInsightVisible] = useState(false);
  const [simulationComplete, setSimulationComplete] = useState(false);

  const containerRef = useRef(null);
  const anamnesaRef = useRef(null);
  const riwayatRef = useRef(null);
  const vitalsRef = useRef(null);
  const trajRef = useRef(null);

  const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const runSimulation = async () => {
    if (isRunning || simulationComplete) return;
    setIsRunning(true);

    const finalString = "batuk produktif disertai sekret mukopurulen, rhinorrhea akut, dan febris persisten";

    // STEP 1: Synthesize anamnesa
    setStatus("SENTRA // RM-88492-A // SENAUTO ENGINE: SYNTHESIZING...");
    setHeaderColor("var(--sdx-c-asesmen)");
    
    // Smooth scroll to anamnesa (handled by ref if needed, but let's just run the UI logic)
    setAnamnesaText("");
    const words = finalString.split(" ");
    let currentText = "";
    for (let i = 0; i < words.length; i++) {
      currentText += words[i] + " ";
      setAnamnesaText(currentText.trim());
      await delay(150);
    }
    await delay(500);

    // STEP 2: Anamnesa entity tags
    setAnamnesaTags([true, false, false]);
    await delay(300);
    setAnamnesaTags([true, true, false]);
    await delay(300);
    setAnamnesaTags([true, true, true]);
    await delay(500);

    // STEP 3: EMR Retrieval
    setStatus("SENTRA // RM-88492-A // EMR RETRIEVAL ACTIVE");
    setIsEmrLoader(true);
    await delay(1500);
    setIsEmrLoader(false);
    setIsHistoryLoaded(true);
    setStatus("SENTRA // RM-88492-A // ALL DATA SYNCED");
    await delay(800);

    // STEP 4: VITALS & EMR ANOMALY
    setVitalsBlockVisible(true);
    await delay(200);
    for (let i = 0; i < vitalsTags.length; i++) {
      setVitalsTags(prev => {
        const next = [...prev];
        next[i] = true;
        return next;
      });
      await delay(200);
    }
    await delay(500);

    // STEP 5: Lab recommendations
    setStatus("SENTRA // RM-88492-A // ANALYZING LAB RECOMMENDATIONS...");
    setLabOpen(true);
    await delay(1000);
    
    for (let i = 0; i < 3; i++) {
      setLabItemsSelected(prev => {
        const next = [...prev];
        next[i] = true;
        return next;
      });
      await delay(500);
    }
    await delay(500);

    // STEP 6: Trajectory
    setStatus("SENTRA // RM-88492-A // LOADING PATIENT TRAJECTORY...");
    setTrajectoryActive(true);
    await delay(1000);
    setTrajectoryInsightVisible(true);
    await delay(1500);

    // DONE
    setStatus("SENTRA // RM-88492-A // SIMULATION COMPLETE");
    setSimulationComplete(true);
    setIsRunning(false);
  };

  return (
    <section 
      data-sentra-sim 
      className="bg-[#0d0d0d] py-24 px-6 md:px-12 border-t border-muted/50 overflow-hidden"
      ref={containerRef}
    >
      {/* Intro */}
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <p className="text-accent text-sm uppercase tracking-widest mb-4">Simulasi Langsung</p>
        <h2 className="text-foreground text-[32px] md:text-[45px] font-bold mb-6">
          Lihat Bagaimana Sentra Memproses Pasien
        </h2>
        <p className="text-muted text-lg max-w-[600px] mx-auto mb-8">
          Demonstrasi pipeline klinis interaktif — dari input anamnesis mentah melalui ekstraksi entitas, pengambilan rekam medis elektronik, deteksi anomali vital, hingga trajectory diagnostik berbasis Artificial Intelligence. Seluruhnya dikomputasi secara real-time oleh SenAuto Engine.
        </p>
        <button
          onClick={runSimulation}
          disabled={isRunning || simulationComplete}
          className={`group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-500 ${
            simulationComplete
              ? "bg-green-600/20 text-green-400 border border-green-500/30 cursor-default"
              : isRunning
              ? "bg-accent/20 text-accent border border-accent/30 cursor-wait"
              : "bg-accent text-background border border-accent hover:shadow-[0_0_32px_rgba(235,89,57,0.5)] hover:-translate-y-0.5 hover:scale-[1.02]"
          }`}
        >
          {/* Pulse ring on idle */}
          {!isRunning && !simulationComplete && (
            <span className="absolute inset-0 rounded-full animate-ping bg-accent/20" style={{ animationDuration: "2s" }} />
          )}
          {/* Spinner on running */}
          {isRunning && (
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          )}
          {/* Check icon on complete */}
          {simulationComplete && (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
          {/* Play icon on idle */}
          {!isRunning && !simulationComplete && (
            <svg className="w-4 h-4 relative" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
          <span className="relative">
            {simulationComplete ? "Simulasi Selesai" : isRunning ? "Memproses..." : "Mulai Simulasi"}
          </span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[800px_1fr] gap-20 relative">
        {/* System Header */}
        <div 
          className="absolute -top-10 left-0 text-xs font-medium uppercase tracking-widest transition-colors duration-500"
          style={{ color: headerColor }}
        >
          {status}
        </div>

        {/* Clinical Stream (Left) */}
        <div className="relative pl-16 flex flex-col gap-14 border-l border-muted/20">
          
          {/* 01. Anamnesa */}
          <div className="relative" ref={anamnesaRef}>
            <div className="absolute -left-[68.5px] top-2 w-[7px] h-[7px] rounded-full border border-muted bg-[#1C1B1A]" />
            <h3 className="text-accent text-sm uppercase tracking-widest mb-6">01. Anamnesa</h3>
            <div className="bg-muted/5 border border-muted/10 p-8 relative overflow-hidden">
              {/* Grid background */}
              <div className="absolute inset-0 z-0 opacity-20" 
                style={{ 
                  backgroundImage: `linear-gradient(to right, var(--sdx-line-base) 1px, transparent 1px), linear-gradient(to bottom, var(--sdx-line-base) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} 
              />
              <div className="relative z-10">
                <span className="text-accent text-xs uppercase tracking-widest mb-2 block">Keluhan Utama</span>
                <p className="text-muted text-lg mb-6 leading-relaxed">
                  Pasien datang dengan keluhan{" "}
                  <span className="text-foreground border-b border-dashed border-muted inline-block">
                    {anamnesaText}
                  </span>{" "}
                  sejak 2 hari yang lalu.
                </p>
                <span className="text-accent text-xs uppercase tracking-widest mb-2 block">Keluhan Tambahan</span>
                <p className="text-muted text-lg">Nyeri telan, nafsu makan menurun, myalgia ringan.</p>
              </div>
            </div>
          </div>

          {/* 02. Riwayat */}
          <div className="relative" ref={riwayatRef}>
            <div className="absolute -left-[68.5px] top-2 w-[7px] h-[7px] rounded-full border border-muted bg-[#1C1B1A]" />
            <h3 className="text-accent text-sm uppercase tracking-widest mb-6">02. Riwayat Penyakit & Alergi</h3>
            {isEmrLoading && (
              <p className="text-accent text-sm animate-pulse mb-4 uppercase tracking-widest">[SYSTEM: RETRIEVING EMR DATA...]</p>
            )}
            {isHistoryLoaded && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-[1.5fr_1fr] gap-12"
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-muted text-xs uppercase font-medium mb-1">Riwayat Penyakit Sekarang (RPS)</p>
                    <p className="text-foreground text-lg">Gejala memburuk pada malam hari.</p>
                  </div>
                  <div>
                    <p className="text-muted text-xs uppercase font-medium mb-1">Riwayat Penyakit Dahulu (RPD)</p>
                    <p className="text-foreground text-lg">
                      Hipertensi (Terkontrol) <span className="ml-2 bg-[#FBBF24] text-black text-[10px] font-bold px-2 py-0.5 rounded">KRONIS: HT</span>
                    </p>
                  </div>
                </div>
                <div className="border-l border-muted/20 pl-6 flex flex-col gap-3">
                  <p className="text-muted text-xs uppercase font-medium mb-2">Alergi Tercatat</p>
                  <div className="flex justify-between text-sm border-b border-dashed border-muted/20 pb-1">
                    <span>Obat</span><span className="text-red-500 font-medium">Amoxicillin (Ruam)</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-dashed border-muted/20 pb-1">
                    <span>Makanan</span><span className="text-red-500 font-medium">Seafood (Gatal)</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-dashed border-muted/20 pb-1">
                    <span>Udara</span><span>Debu (Rhinitis)</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* 03. Tanda Vital */}
          <div className="relative" ref={vitalsRef}>
            <div className="absolute -left-[68.5px] top-2 w-[7px] h-[7px] rounded-full border border-muted bg-[#1C1B1A]" />
            <h3 className="text-accent text-sm uppercase tracking-widest mb-6">03. Tanda Vital & Objektif</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "GCS", val: "15", unit: "E4V5M6" },
                { label: "Tekanan Darah", val: "135/85", unit: "mmHg" },
                { label: "Nadi", val: "104", unit: "bpm" },
                { label: "Napas", val: "22", unit: "x/m" },
                { label: "Suhu", val: "38.8", unit: "°C", critical: true },
                { label: "SpO2", val: "92", unit: "%", critical: true },
                { label: "MAP", val: "101", unit: "mmHg" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-muted text-xs uppercase tracking-widest">{item.label}</span>
                  <span className={`text-2xl font-bold ${item.critical ? "text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]" : "text-foreground"}`}>
                    {item.val}<span className="text-sm font-normal text-muted ml-1">{item.unit}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Lab Recommendations */}
            <div className="mt-12 pt-8 border-t border-muted/20">
              <div 
                className={`flex items-center gap-2 italic font-medium cursor-pointer transition-colors ${labOpen ? "text-accent" : "text-muted hover:text-accent"}`}
                onClick={() => setLabOpen(!labOpen)}
              >
                ✦ {labOpen ? "Usulan Lab: Berdasarkan Febris & Desaturasi" : "Usulan Pemeriksaan Lab"}
              </div>
              <motion.div 
                initial={false}
                animate={labOpen ? { height: "auto", opacity: 1, marginTop: 16 } : { height: 0, opacity: 0 }}
                className="overflow-hidden flex flex-col gap-3"
              >
                {[
                  { name: "Hematologi Lengkap", status: "MENUNGGU HASIL LAB" },
                  { name: "C-Reactive Protein (CRP)", status: "MENUNGGU HASIL LAB" },
                  { name: "Foto Thorax AP/PA", status: "MENUNGGU HASIL RADIOLOGI" },
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between items-center pb-2 border-b border-muted/5 transition-colors ${labItemsSelected[i] ? "text-foreground" : "text-muted"}`}>
                    <div className="flex items-center gap-3">
                      <span className={labItemsSelected[i] ? "text-accent" : ""}>[{labItemsSelected[i] ? "x" : " "}]</span>
                      <span className="text-lg">{item.name}</span>
                    </div>
                    {labItemsSelected[i] && (
                      <motion.span 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[10px] font-bold text-[#FBBF24] tracking-widest uppercase"
                      >
                        {item.status}
                      </motion.span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Trajectory (Appears inline) */}
          <motion.div 
            initial={false}
            animate={trajectoryActive ? { height: "auto", opacity: 1, marginBottom: 24 } : { height: 0, opacity: 0 }}
            className="overflow-hidden border-l-2 border-[#FBBF24] bg-gradient-to-r from-[#FBBF24]/5 to-transparent pl-6"
          >
            <div className="flex justify-between text-[#FBBF24] text-[10px] font-bold tracking-widest uppercase mb-6">
              <span>Trajektori Tekanan Darah (Sistolik & Diastolik) // 5 Kunjungan Terakhir</span>
              <span className="cursor-pointer hover:text-foreground" onClick={() => setTrajectoryActive(false)}>[X] CLOSE</span>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1 h-[180px] relative">
                <svg width="100%" height="100%" viewBox="0 0 500 160" preserveAspectRatio="none">
                  <line x1="0" y1="30" x2="500" y2="30" stroke="var(--sdx-line-base)" strokeDasharray="4" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="var(--sdx-line-base)" strokeDasharray="4" />
                  <line x1="0" y1="130" x2="500" y2="130" stroke="var(--sdx-line-base)" strokeDasharray="4" />
                  {/* Chart Paths */}
                  <polyline points="50,40 150,60 250,20 350,70 450,70" fill="none" stroke="#FBBF24" strokeWidth="2" strokeDasharray="1000" strokeDashoffset={trajectoryActive ? 0 : 1000} className="transition-all duration-[1500ms]" />
                  <polyline points="50,120 150,135 250,110 350,140 450,140" fill="none" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="2" strokeDasharray="1000" strokeDashoffset={trajectoryActive ? 0 : 1000} className="transition-all duration-[1500ms] delay-200" />
                  {/* Points */}
                  <circle cx="450" cy="70" r="4" fill="#FBBF24" stroke="#0d0d0d" strokeWidth="2" />
                </svg>
              </div>
              <div className="w-full md:w-60 border-l border-dashed border-muted/20 pl-6 flex flex-col gap-4">
                <p className="text-[#FBBF24] text-[10px] font-bold tracking-widest uppercase">Active OAT (Obat Anti Hipertensi)</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm text-foreground">
                    <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#FBBF24]" /> Amlodipin</div>
                    <span className="text-[10px] border border-muted/20 px-1 rounded text-[#FBBF24]">1 x 10mg</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-foreground">
                    <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#FBBF24]" /> Lisinopril</div>
                    <span className="text-[10px] border border-muted/20 px-1 rounded text-[#FBBF24]">1 x 10mg</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 04. Fisik */}
          <div className="relative">
            <div className="absolute -left-[68.5px] top-2 w-[7px] h-[7px] rounded-full border border-muted bg-[#1C1B1A]" />
            <h3 className="text-accent text-sm uppercase tracking-widest mb-6">04. Pemeriksaan Fisik Head-to-Toe</h3>
            <div className="flex flex-col gap-5">
              {[
                { organ: "Kepala & Leher", res: "Normocephal, konjungtiva anemis (-), pembesaran KGB (-)" },
                { organ: "Dada (Cor & Pulmo)", res: "Vesikuler, rhonki basah kasar di basal paru dextra (+), wheezing (-)", alert: true },
                { organ: "Perut (Abdomen)", res: "Supel, bising usus normal, hepar/lien tidak teraba, nyeri tekan (-)" },
                { organ: "Ekstremitas", res: "Akral hangat, CRT < 2 detik, edema (-)" },
              ].map((row, i) => (
                <div key={i} className="grid md:grid-cols-[160px_1fr] gap-6 border-b border-dashed border-muted/10 pb-3 items-baseline">
                  <span className="text-muted text-xs uppercase font-medium">{row.organ}</span>
                  <span className={`text-lg ${row.alert ? "text-red-500 font-medium" : "text-foreground"}`}>{row.res}</span>
                </div>
              ))}
            </div>
          </div>

          <input 
            type="text" 
            placeholder="Ketik kesimpulan asesmen atau ketik '/' untuk perintah..."
            className="w-full bg-transparent border-b border-muted/20 pb-4 text-foreground outline-none focus:border-accent transition-colors placeholder:italic placeholder:text-muted/30 mt-8"
          />
        </div>

        {/* Entity Sidebar (Right) */}
        <div className="lg:sticky lg:top-32 h-fit flex flex-col gap-12">
          {/* Anamnesa Extraction */}
          <div className="flex flex-col">
            <div className="text-muted text-[10px] font-bold tracking-widest uppercase border-b border-muted/20 pb-3 mb-4">
              ARTIFICIAL INTELLIGENCE ENTITY: ANAMNESA
            </div>
            <div className="flex flex-col gap-3">
              {[
                { text: "Batuk Produktif", type: "SYMPTOM" },
                { text: "Rhinorrhea Akut", type: "SYMPTOM" },
                { text: "Febris Persisten", type: "OBSERVATION" },
              ].map((tag, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={anamnesaTags[i] ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  className="flex items-center justify-between text-foreground"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-accent shadow-[0_0_8px_var(--sdx-c-asesmen)]" />
                    <span className="text-lg">{tag.text}</span>
                  </div>
                  <span className="text-[10px] font-bold border border-muted/20 px-1 rounded text-muted">{tag.type}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vitals Anomaly */}
          {vitalsBlockVisible && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col"
            >
              <div className="text-red-500 text-[10px] font-bold tracking-widest uppercase border-b border-muted/20 pb-3 mb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                VITALS & EMR ANOMALY
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { text: "SpO2 92%", type: "HYPOXEMIA", color: "text-red-500" },
                  { text: "Suhu 38.8°C", type: "FEBRIS", color: "text-[#FBBF24]" },
                  { text: "Nadi 104 bpm", type: "TACHYCARDIA", color: "text-[#FBBF24]" },
                  { text: "Amoxicillin", type: "ALLERGY", color: "text-red-500" },
                  { text: "Hipertensi", type: "COMORBID", color: "text-foreground" },
                ].map((tag, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={vitalsTags[i] ? { opacity: 1, x: 0 } : { opacity: 0 }}
                    className={`flex items-center justify-between ${tag.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-1 h-1 rounded-full ${tag.color === 'text-red-500' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]' : 'bg-accent shadow-[0_0_8px_var(--sdx-c-asesmen)]'}`} />
                      <span className="text-lg">{tag.text}</span>
                    </div>
                    <span className={`text-[10px] font-bold border border-current px-1 rounded opacity-80`}>{tag.type}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Trajectory Insight */}
          {trajectoryInsightVisible && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col"
            >
              <div className="text-[#FBBF24] text-[10px] font-bold tracking-widest uppercase border-b border-muted/20 pb-3 mb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
                ARTIFICIAL INTELLIGENCE TRAJECTORY INSIGHT
              </div>
              <p className="text-foreground text-lg leading-relaxed">
                Tekanan darah pasien <span className="text-[#FBBF24] font-bold italic">fluktuatif (uncontrolled)</span> pada Q4 2025 - Q1 2026 dengan lonjakan sistolik di bulan Januari. Penurunan saat ini stabil, namun evaluasi kepatuhan OAT ganda direkomendasikan.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
