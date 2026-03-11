import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sentra AI — Clinical Decision Support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d0d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#b7ab98",
            }}
          >
            SENTRA
            <span style={{ color: "#eb5939" }}>.</span>
            {" "}HEALTHCARE AI
          </span>
        </div>

        {/* Middle: Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            DIAGNOSA.
            <br />
            TERAPI. REPEAT.
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#b7ab98",
              maxWidth: "720px",
              lineHeight: 1.5,
            }}
          >
            AI-powered Clinical Decision Support — mengurangi misdiagnosis 40%
            untuk layanan kesehatan Indonesia.
          </div>
        </div>

        {/* Bottom: Stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            borderTop: "1px solid rgba(183,171,152,0.15)",
            paddingTop: "32px",
          }}
        >
          {[
            { value: "40%", label: "Reduksi Misdiagnosis" },
            { value: "3×", label: "Keputusan Lebih Cepat" },
            { value: "97,2%", label: "Akurasi Triase" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: 900,
                  color: "#eb5939",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{ fontSize: "14px", color: "#b7ab98", opacity: 0.7 }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
