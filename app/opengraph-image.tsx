import { ImageResponse } from "next/og";

export const alt = "Gaurav Kumar | Software Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const techStack = [
    "TypeScript",
    "Node.js",
    "Next.js",
    "NestJS",
    "Go",
    "PostgreSQL",
    "Docker",
  ];

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#09090b",
        padding: "60px 80px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        position: "relative",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top header bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 18px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "9999px",
              backgroundColor: "#22c55e",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#e4e4e7",
              letterSpacing: "-0.01em",
            }}
          >
            itsanurag.in
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "18px",
            color: "#a1a1aa",
            fontFamily: "monospace",
          }}
        >
          <span>@itstheanurag</span>
        </div>
      </div>

      {/* Center Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          zIndex: 10,
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#38bdf8",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontFamily: "monospace",
            }}
          >
            Software Developer
          </span>
        </div>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Gaurav Kumar
        </h1>

        <p
          style={{
            fontSize: "26px",
            lineHeight: 1.45,
            color: "#a1a1aa",
            margin: 0,
            maxWidth: "920px",
          }}
        >
          Building scalable backend systems, web applications, and developer
          tools with clean architecture and practical engineering.
        </p>
      </div>

      {/* Bottom Tech Stack Tags */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
          zIndex: 10,
        }}
      >
        {techStack.map((tech) => (
          <div
            key={tech}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 16px",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#d4d4d8",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
