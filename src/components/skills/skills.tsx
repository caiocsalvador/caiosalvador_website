import SkillsBox from "./skills-box";

const DigitalMarketingSkills = [
  "Inbound Marketing",
  "SEO",
  "Conversion Rate Optimization",
  "Marketing Automation",
  "Lead Nurturing",
  "HubSpot",
  "Google Ads",
  "Facebook Ads",
  "Email Marketing",
  "Mailchimp",
  "Sendgrid",
  "A/B Testing",
  "Landing Pages",
  "User Journey",
  "Google Tag Manager",
];

const FullStackSkills = [
  "Javascript (ES6+)",
  "Typescript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "GraphQL",
  "Apollo",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Jest",
  "React Testing Library",
  "Cypress",
  "Git",
  "Github",
  "Gitlab",
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
  "Business Intelligence",
];

const Skills = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-6xl">Skills &amp; Tools</h2>
        <div className="grid grid-cols-4 gap-4">
          <SkillsBox type="small" color="green" title="Digital Marketing" skills={DigitalMarketingSkills} />
          <SkillsBox
            type="large"
            color="blue"
            title="Full-Stack Development"
            skills={FullStackSkills}
            className="col-span-2"
          />
          <SkillsBox type="small" color="purple" title="Data Analysis" skills={DataAnalysisSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
