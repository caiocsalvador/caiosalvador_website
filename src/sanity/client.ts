import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-11-29",
  useCdn: false,
});

export default client;
