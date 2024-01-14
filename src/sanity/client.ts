import { createClient } from "next-sanity";

const client = createClient({
  projectId: "jk38bgo2",
  dataset: "production",
  apiVersion: "2023-11-29",
  useCdn: false,
});

export default client;
