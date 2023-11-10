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
    <section className="py-32">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center text-6xl font-semibold">Skills &amp; Tools</h2>
        <div className="grid grid-cols-4 gap-4">
          <SkillsBox type="small" color={"green" as Color} title="Digital Marketing" skills={DigitalMarketingSkills} />
          <SkillsBox
            type="large"
            color={"blue" as Color}
            title="Full-Stack Development"
            skills={FullStackSkills}
            className="col-span-2"
          />
          <SkillsBox type="small" color={"purple" as Color} title="Data Analysis" skills={DataAnalysisSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
