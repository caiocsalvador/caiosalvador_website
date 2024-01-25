import useAboutData from "@/sanity/hooks/useAboutData";
import AboutCard from "./about-card";

const About = async () => {
  // Get Data
  const data = await useAboutData();

  return (
    <div className="container relative mx-auto md:w-[850px]">
      <AboutCard title={data.title} text={data.text} imageUrl={data.imageUrl} />
    </div>
  );
};

export default About;
