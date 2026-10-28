import { ImageResponse } from "next/og";

export const alt = "Gaurav Kumar | Backend Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function loadNewsreader() {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400&display=swap",
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

export default async function Image() {
  const newsreader = await loadNewsreader();

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
          padding: "58px 72px 52px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #2a302a",
            paddingBottom: "20px",
            fontFamily: "sans-serif",
            fontSize: "17px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#eae6dc" }}>Gaurav Kumar</span>
          <span style={{ color: "#9aa096" }}>Backend engineer</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "15px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#d8a15c",
            }}
          >
            Portfolio / 2026
          </span>

          <div
            style={{
              fontFamily: newsreader ? "Newsreader" : "serif",
              fontSize: "72px",
              lineHeight: 1.03,
              letterSpacing: "-0.03em",
              maxWidth: "960px",
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
            fontFamily: "sans-serif",
            fontSize: "16px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9aa096",
          }}
        >
          <span>TypeScript · NestJS · PostgreSQL · Go</span>
          <span style={{ color: "#d8a15c" }}>itsanurag.in</span>
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
