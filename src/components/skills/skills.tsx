"use client";
import { useRef } from "react";
import SkillsBox from "./skills-box";
import Color from "@/types/color";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DigitalMarketingSkills = [
  "Inbound Marketing",
  "SEO",
  "Conversion Rate Optimization",
  "Marketing Automation",
  "Lead Nurturing",
  "HubSpot",
  "Google Ads",
  "Social Media Ads",
  "Mailchimp",
  "Sendgrid",
  "A/B Testing",
  "User Journey",
  "Google Tag Manager",
];

const FullStackSkills = [
  "Typescript",
  "Javascript",
  "React",
  "Next.js",
  "Prisma",
  "Node.js",
  "Tailwind",
  "Angular",
  "Vue.js",
  "PHP",
  "WordPress",
  "Sage",
  "Chakra UI",
  "Express",
  "JQuery",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Storybook",
  "Svelte",
  "GraphQL",
  "Laravel",
  "Yii Framework",
  "Python",
  "Django",
  "Ruby",
  "Ruby on Rails",
  "Mobile Apps Dev",
  "React Native",
  "Sass",
  "CSS-in-JS",
  "Git",
  "APIs Development",
  "Stripe",
  "Zoom API",
  "Hubspot API",
  // "Jest",
  // "React Testing Library",
  // "Cypress",
];

const DataAnalysisSkills = [
  "Data Visualization",
  "Google Looker Studio",
  "Google Analytics",
  "Google Tag Manager",
  "Hotjar",
  "Google Search Console",
  "Google Optimize",
  "VWO",
  "SQL",
  "Excel",
  //   "Power BI",
  //   "Tableau",
  "Data Cleaning",
  "Data Analysis",
  "Statistics",
];

const Skills = () => {
  // Animations
  const boxcontainer = useRef(null);
  useGSAP(
    () => {
      let mm = gsap.matchMedia();
      gsap.registerPlugin(ScrollTrigger);
      mm.add("(min-width: 1000px)", () => {
        gsap.from(".box1", {
          scrollTrigger: {
            trigger: boxcontainer.current,
            start: "top 60%",
          },
          x: -350,
          opacity: 0,
          duration: 1.5,
          ease: "bounce",
        });
        gsap.from(".box2", {
          scrollTrigger: {
            trigger: boxcontainer.current,
            start: "top 60%",
          },
          y: 350,
          opacity: 0,
          duration: 1,
          ease: "back",
        });
        gsap.from(".box3", {
          scrollTrigger: {
            trigger: boxcontainer.current,
            start: "top 60%",
          },
          x: 350,
          opacity: 0,
          duration: 1.5,
          ease: "bounce",
        });
      });
    },
    { scope: boxcontainer }
  );

  return (
    <div className="container relative mx-auto">
      <div id="skills" className="absolute left-0 top-[-100px]"></div>
      <h2 className="mb-10 text-center font-league_spartan text-5xl font-semibold xl:text-6xl">Skills &amp; Tools</h2>
      <div ref={boxcontainer} className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <SkillsBox
          type="small"
          color={"green" as Color}
          title="Digital Marketing"
          className="box1 order-2 lg:order-none"
          skills={DigitalMarketingSkills}
        />
        <SkillsBox
          type="large"
          color={"blue" as Color}
          title="Full-Stack Development"
          skills={FullStackSkills}
          className="box2 order-1 lg:order-none lg:col-span-2"
        />
        <SkillsBox
          type="small"
          color={"purple" as Color}
          title="Data Analysis"
          className="box3 order-3 lg:order-none"
          skills={DataAnalysisSkills}
        />
      </div>
    </div>
  );
};

export default Skills;
