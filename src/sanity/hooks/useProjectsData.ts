import sanityClient from "@/sanity/client";

async function useProjectsData() {
  // Returns all documents in the dataset with the type "project"
  const query = `
  *[_type == "project"] {
    title,
    slug,
    description,
    link,
    repoLink,
    techs,
    order,
    'imageUrl': image.asset->url,
  }
  `;
  const projects = await sanityClient.fetch(query);
  // This will activate the closest `error.js` Error Boundary
  if (!projects) {
    throw new Error("Error fetching data");
  }

  return projects;
}

export default useProjectsData;
