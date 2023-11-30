import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  projectId: "jk38bgo2",
  dataset: "production",
  apiVersion: "2023-11-29",
  title: "CaioSalvador.com",
  // useCdn: true,
  // token: process.env.SANITY_TOKEN,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
