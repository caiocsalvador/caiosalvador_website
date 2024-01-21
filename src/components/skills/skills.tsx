import SkillsBox from "./skills-box";
import Color from "@/types/color";

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
  "Chakra UI",
  "Express",
  "JQuery",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Storybook",
  "Svelte",
  "SvelteKit",
  "GraphQL",
  "Bootstrap",
  "PHP",
  "WordPress",
  "Sage",
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
  "Unreal Engine 5",
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
  return (
    <div className="container relative mx-auto">
      <div id="skills" className="absolute left-0 top-[-100px]"></div>
      <h2 className="mb-10 text-center font-league_spartan text-5xl font-semibold xl:text-6xl">Skills &amp; Tools</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <SkillsBox
          type="small"
          color={"green" as Color}
          title="Digital Marketing"
          className="order-2 lg:order-none"
          skills={DigitalMarketingSkills}
        />
        <SkillsBox
          type="large"
          color={"blue" as Color}
          title="Full-Stack Development"
          skills={FullStackSkills}
          className="order-1 lg:order-none lg:col-span-2"
        />
        <SkillsBox
          type="small"
          color={"purple" as Color}
          title="Data Analysis"
          className="order-3 lg:order-none"
          skills={DataAnalysisSkills}
        />
      </div>
    </div>
  );
};

export default Skills;
