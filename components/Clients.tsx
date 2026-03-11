"use client";

import React from "react";

function OpenAILogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  );
}

function AnthropicLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M9.218 2h2.402L16 12.987h-2.402zM4.379 2h2.512l4.38 10.987H8.82l-.895-2.308h-4.58l-.896 2.307H0L4.38 2.001zm2.755 6.64L5.635 4.777 4.137 8.64z" />
    </svg>
  );
}

function NextJSLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <mask id="nextmask" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#nextmask)">
        <circle cx="90" cy="90" r="90" fill="currentColor" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="var(--color-background)" />
        <rect x="115" y="54" width="12" height="72" fill="var(--color-background)" />
      </g>
    </svg>
  );
}

function TailwindLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 480" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z" />
    </svg>
  );
}

function FHIRLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M24.65 26.361c-5.62 5.642-4.926 11.294-2.374 15.551C16.413 39.412 11 29.5 18.5 20.5C26.5 12.5 25 9 25 6c2.5 4.5 6.406 13.58-.35 20.361" />
      <path d="M23.496 42c-1.196-2.593-2.444-8.865 1.18-12.5c6.528-6.73 5.48-12.627 5.335-12.983L30 16.5q.004 0 .01.017c.269.424 5.39 8.73 1.621 17.983c2.175-1.256 3.1-2.971 3.369-3.5c-1.126 9.124-6.882 10.626-11.504 11" />
      <path d="M21.5 15.5c-3 1.833-9.782 6.5-10.182 12.5s3 8.5 5 10.5c-1-1.5-3-5.2-3-10s5.515-10.833 8.182-13" />
    </svg>
  );
}

// Google "G" — official Google G logo silhouette
function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
    </svg>
  );
}

// Gemini — official Google Gemini sparkle icon
function GeminiLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 65 65" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" />
    </svg>
  );
}

// Stanford — Stanford "S" tree block mark
function StanfordLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5C25.2 5 5 25.2 5 50s20.2 45 45 45 45-20.2 45-45S74.8 5 50 5zm0 6c21.5 0 39 17.5 39 39S71.5 89 50 89 11 71.5 11 50s17.5-39 39-39z" />
      <path d="M42 72V56h-6l14-18 14 18h-6v16H42z" />
      <path d="M47 56h6v16h-6z" />
      <path d="M46 36c0-3 2-8 4-8s4 5 4 8c3 0 8 2 8 4s-5 4-8 4c0 3-2 8-4 8s-4-5-4-8c-3 0-8-2-8-4s5-4 8-4z" />
    </svg>
  );
}

// Memphis — University of Memphis "M" Tigers
function MemphisLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20h15l25 35 25-35h15v60H75V42L55 70H45L25 42v38H10V20z" />
    </svg>
  );
}

function MelindaLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M8.178 24.8V10.4c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C9.698 7.2 10.258 7.2 11.378 7.2h5.333c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v1.689" />
      <path d="M8.178 24.8H7.2m17.6 0h-.978m-15.644 0h11.733m0 0V12.089m0 0h2.311c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054V24.8" />
      <path d="M14.045 11.111v3.911m-1.956-1.956h3.911" />
      <circle cx="16" cy="17.956" r=".5" fill="currentColor" stroke="none" />
      <circle cx="12.089" cy="17.956" r=".5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="21.373" r=".5" fill="currentColor" stroke="none" />
      <circle cx="12.089" cy="21.373" r=".5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const partners = [
  { name: "OpenAI", Logo: OpenAILogo },
  { name: "Anthropic", Logo: AnthropicLogo },
  { name: "Google", Logo: GoogleLogo },
  { name: "Gemini", Logo: GeminiLogo },
  { name: "Stanford University", Logo: StanfordLogo },
  { name: "Memphis University", Logo: MemphisLogo },
  { name: "RSIA Melinda", Logo: MelindaLogo },
  { name: "Next.js", Logo: NextJSLogo },
  { name: "Tailwind CSS", Logo: TailwindLogo },
  { name: "HL7 FHIR", Logo: FHIRLogo },
];

export default function Clients() {
  return (
    <section className="py-20 border-b border-muted/20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-2xl md:text-3xl font-medium text-center text-foreground leading-snug max-w-[800px] mx-auto font-jakarta uppercase tracking-tighter">
          In Collaboration with{" "}
          <span className="text-accent">Industry Leaders</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="mx-12 flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-500 text-foreground shrink-0"
            >
              <partner.Logo className="w-8 h-8" />
              <span className="text-sm font-bold tracking-wider uppercase font-jakarta">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
