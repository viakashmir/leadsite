import { ImageResponse } from "next/og";

// Square brand mark for Organization.logo and social cards. Google needs a
// crawlable raster logo (min 112x112); 512x512 covers every surface.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FBF8F2",
          color: "#14213D",
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        <div style={{ display: "flex" }}>Tavel</div>
        <div style={{ display: "flex", color: "#7A1F2B" }}>Package</div>
      </div>
    ),
    { width: 512, height: 512 },
  );
}
