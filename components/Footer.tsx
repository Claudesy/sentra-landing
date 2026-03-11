// Architected and built by Claudesy.
"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Marquee Style Divider */}
        <div className="border-y border-muted/20 py-4 mb-20 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted/50 mr-10">
                Sentra Healthcare Intelligence
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <p className="text-sm text-muted">
              Jl. Balowerti II No. 59, <br />
              Kediri, Jawa Timur, Indonesia
            </p>
            <Link
              href="mailto:drferdiiskandar@sentraai.id"
              className="text-sm text-muted hover:text-accent transition-colors underline decoration-muted/20 underline-offset-4"
            >
              drferdiiskandar@sentraai.id
            </Link>
          </div>

          {/* Links 1 */}
          <div className="flex flex-col gap-4">
            {/* [REQUIRES VERIFICATION] */}
            {["FAQ", "Terms of Service", "Privacy Policy"].map((link) => (
              <Link key={link} href="/" className="text-sm text-muted hover:text-accent transition-colors">
                {link}
              </Link>
            ))}
          </div>

          {/* Links 2 */}
          <div className="flex flex-col gap-4">
            {/* [REQUIRES VERIFICATION] */}
            {["Home", "About", "Services", "Portfolio", "Insights", "Contact"].map((link) => (
              <Link key={link} href="/" className="text-sm text-muted hover:text-accent transition-colors">
                {link}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6">
            {[
              { name: "LinkedIn", href: "https://linkedin.com/company/sentra-ai" },
              { name: "GitHub", href: "https://github.com/sentraai" },
              { name: "X / Twitter", href: "https://x.com/sentraai" },
            ].map((social) => (
              <Link 
                key={social.name} 
                href={social.href} 
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 rounded-full border border-muted/20 flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all">
                  <ArrowUpRight size={14} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted group-hover:text-accent transition-all">
                  {social.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-muted/10 text-center">
          <p className="text-[10px] font-bold tracking-widest text-muted uppercase">
            Sentra Healthcare Intelligence ©2026
          </p>
        </div>
      </div>
    </footer>
  );
}
