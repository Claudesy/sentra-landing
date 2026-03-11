"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 border-b border-muted/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-20">
        {/* Title Side */}
        <div className="flex flex-col gap-6">
          <p className="text-xs font-bold tracking-widest text-accent uppercase">Tentang Sentra</p>
          <h2 className="text-[32px] md:text-[45px] font-bold text-foreground leading-[1.2]">
            Kami membangun <span className="text-accent">infrastruktur kecerdasan klinis</span> yang mentransformasi data pasien terfragmentasi menjadi kejelasan diagnostik real-time bagi dokter garis depan.
          </h2>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px bg-muted/20 self-stretch" />

        {/* Content Side */}
        <div className="flex flex-col gap-8">
          <h4 className="text-xl md:text-2xl font-bold text-foreground">
            Arsitektur Konvergensi Manusia-Artificial Intelligence
          </h4>
          <p className="text-lg text-muted leading-relaxed">
            Sentra direkayasa oleh Dr. Ferdi Iskandar — seorang dokter-teknolog yang mengerahkan Artificial Intelligence sebagai mitra co-engineering sejak hari pertama.
            <br /><br />
            Setiap lapisan platform — dari piagam tata kelola dan arsitektur teknis hingga mandat klinis — dibangun melalui konvergensi langsung antara penilaian manusia dan kapabilitas komputasional. Dokter membawa konteks klinis, penalaran etis, dan akuntabilitas akhir. Artificial Intelligence membawa kecepatan iteratif, presisi struktural, dan kedalaman analitis.
            <br /><br />
            Bukan Artificial Intelligence yang memimpin, bukan pula manusia bekerja sendiri.
            <br /><br />
            Manusia sebagai Pilot. Artificial Intelligence sebagai Copilot.
          </p>

          <Link
            href="/about"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full border border-muted flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all">
              <ArrowUpRight size={20} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-muted group-hover:text-accent transition-all">
              Selengkapnya
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
