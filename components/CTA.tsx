"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden border-b border-muted/20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://framerusercontent.com/images/Kd1ttSxHOWvaP0zR0AqnVm4Q.png?width=2000" 
          alt="CTA Background" 
          fill 
          className="object-cover opacity-40 grayscale"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-bold tracking-widest text-accent uppercase font-jakarta">Deploy Sentra</p>
          <h2 className="text-[32px] md:text-[56px] font-bold text-foreground leading-[1.1] max-w-[800px] font-jakarta">
            Ready to Integrate Clinical Intelligence Into Your Infrastructure?
          </h2>
          <p className="text-lg text-muted max-w-[600px] mx-auto leading-relaxed">
            From Puskesmas to tertiary hospitals — Sentra's modular architecture adapts to your clinical workflow. Let's architect your deployment.
          </p>
        </div>

        <Link 
          href="/contact" 
          className="flex items-center gap-4 bg-accent px-10 py-5 rounded-full hover:shadow-[0_0_32px_rgba(235,89,57,0.4)] hover:-translate-y-1 transition-all"
        >
          <div className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background">
            <ArrowUpRight size={24} />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-background">
            Request a Demo
          </span>
        </Link>
      </div>
    </section>
  );
}
