import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rushil Agarwal | AI/ML and Software Developer",
    short_name: "Rushil Agarwal",
    description:
      "Rushil Agarwal - AI/ML and software developer building data, quant, and machine learning projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "ai",
      "software engineering",
      "machine learning",
      "data science",
      "quantitative finance",
      "developer",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
