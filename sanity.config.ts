import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
  dataset: "production",
  apiVersion: "2023-11-29",
  title: "CaioSalvador.com",
  // useCdn: true,
  // token: process.env.SANITY_TOKEN,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
