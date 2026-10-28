import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Gaurav Kumar | Backend Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function loadNewsreader() {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500&display=swap",
      { next: { revalidate: 60 * 60 * 24 * 30 } },
    ).then((response) => response.text());

    const fontUrl = css.match(/src: url\((https:\/\/[^)]+)\)/)?.[1];
    if (!fontUrl) return null;

    return await fetch(fontUrl, {
      next: { revalidate: 60 * 60 * 24 * 30 },
    }).then((response) => response.arrayBuffer());
  } catch {
    return null;
  }
}

async function loadAvatar() {
  try {
    const file = await readFile(path.join(process.cwd(), "public/icon.png"));
    return `data:image/png;base64,${file.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function Image() {
  const [newsreader, avatar] = await Promise.all([
    loadNewsreader(),
    loadAvatar(),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#101310",
          color: "#eae6dc",
          padding: "54px 64px 48px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 24px 24px, rgba(234, 230, 220, 0.08) 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 82% 12%, rgba(216, 161, 92, 0.17) 0%, rgba(16, 19, 16, 0) 55%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #2a302a",
            paddingBottom: "22px",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {avatar && (
              <img
                src={avatar}
                alt=""
                width={68}
                height={68}
                style={{
                  display: "flex",
                  objectFit: "cover",
                  border: "1px solid #3a423a",
                }}
              />
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <span
                style={{
                  fontFamily: newsreader ? "Newsreader" : "serif",
                  fontSize: "30px",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                Gaurav Kumar
              </span>
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#9aa096",
                }}
              >
                Backend engineer / India
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span
              style={{
                fontFamily: "sans-serif",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#9aa096",
              }}
            >
              itsanurag.in
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                border: "1px solid #2a302a",
                padding: "8px 12px",
                fontFamily: "sans-serif",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#7fb79b",
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: "6px",
                  height: "6px",
                  borderRadius: "999px",
                  backgroundColor: "#7fb79b",
                }}
              />
              Open to work
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "13px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#d8a15c",
            }}
          >
            01 / Portfolio 2026
          </span>

          <div
            style={{
              fontFamily: newsreader ? "Newsreader" : "serif",
              fontSize: "74px",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              maxWidth: "940px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>I build the parts you&nbsp;</span>
            <span style={{ color: "#d8a15c" }}>never notice.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #2a302a",
            paddingTop: "20px",
            position: "relative",
            fontFamily: "sans-serif",
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#9aa096",
          }}
        >
          <span>NestJS · PostgreSQL · TypeScript · Go</span>
          <span style={{ color: "#d8a15c" }}>Backend systems / Healthcare</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: newsreader
        ? [
            {
              name: "Newsreader",
              data: newsreader,
              style: "normal",
              weight: 400,
            },
          ]
        : undefined,
    },
  );
}
