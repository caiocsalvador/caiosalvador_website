import sanityClient from "@/sanity/client";

async function useAboutData() {
  // Returns the first/only document in the dataset with the title "About me"
  const query = `
  *[_type == "sections" && title == "About me"][0] {
    title,
    text,
    'imageUrl': image.asset->url,
  }
  `;
  const about = await sanityClient.fetch(query);
  // This will activate the closest `error.js` Error Boundary
  if (!about) {
    throw new Error("Error fetching data");
  }

  return about;
}

export default useAboutData;
