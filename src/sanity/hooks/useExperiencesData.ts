import sanityClient from "@/sanity/client";

async function useExperiencesData() {
  // Returns all documents in the dataset with the type "experience"
  const query = `
  *[_type == "experience"] {
    title,
    startYear,
    endYear,
    description,
    techs,
    order,
  }
  `;
  const experiences = await sanityClient.fetch(query);
  // This will activate the closest `error.js` Error Boundary
  if (!experiences) {
    throw new Error("Error fetching data");
  }

  return experiences;
}

export default useExperiencesData;
