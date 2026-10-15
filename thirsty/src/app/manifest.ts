import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Thirsty",
    short_name: "Thirsty",
    description: "Sei der erste Gast: Early-Bird-Plätze in Restaurants.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#d97706",
  };
}
