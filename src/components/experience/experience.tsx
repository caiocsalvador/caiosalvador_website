import ExperienceItem from "./experience-item";
import Color from "@/types/color";

const experienceItems = [
  {
    title: "Senior Website Development Manager at Poppulo",
    startDate: "2018",
    endDate: "PRESENT",
    description:
      "Being a developer working in the Marketing department helped me develop new skills which I've being using and improving in this role. Today my tasks are divided between Full-stack web development, data analysis, and marketing. I started maintaining a legacy Wordpress/Sage website, however in order to give a better user experience and overall performance upgrade, I've managed a development team and built the current www.poppulo.com website using React, Next.js and Sanity CMS increasing the website conversion rate considerably. On the data analysis side I created report dashboards using data from multiple platforms to enhance the marketing team's decision making process. I also manage a good portion of the marketing team's tech stack, which includes Google Analytics, Google Tag Manager, Google Optimize, Google Looker Studio, Google Search Console, Hotjar, Hubspot Forms, Sanity CMS and more. Marketing is what we do, so I'm involved in many marketing projects and campaigns, helping the team to archive their goals. Campaign setup, landing pages, SEO, Salesforce integration, KPIs tracking and more",
    color: "blue",
  },
  {
    title: "Freelancer",
    startDate: "2015",
    endDate: "2018",
    description:
      "I took time for professional development and to move to another country. During this time I developed many web-based applications and websites using different technologies like Angular, Python, Django, PHP, Laravel, Wordpress and more. For example a language exchange app where people would share their knowledge and learn from each other.",
    color: "green",
  },
  {
    title: "Full-stack Developer at Maxmeio",
    startDate: "2014",
    endDate: "2015",
    description:
      "Top 3 digital marketing agencies in Natal-Brazil. I worked on a wide range of projects for our customers. Working there I created Websites and Mobile Apps using a custom CakePHP based CMS, Wordpress, Angular, Ionic, JQuery, HTML, CSS, Sass, Bootstrap, MySQL and other UI Libraries.",
    color: "pink",
  },
  {
    title: "Software Engineering at Smartpublishing",
    startDate: "2014",
    endDate: "2015",
    description:
      "This company was incubated in the state's wind energy center, they had multiple legacy projects that had to be maintained while developing new features. I was a Full-stack developer there, using Python, Django, Ruby, Ruby on Rails. I also developed a mobile app using Phonegap.",
    color: "orange",
  },
  {
    title: "Software Engineering at Velty",
    startDate: "2014",
    endDate: "2015",
    description:
      "A small startup, my work there was very adaptive/reactive. I took part on each step of web-based apps development. Customer meetings, requirements gathering, software architecture, database design, web development and even customer training. Most projects were developed using Yii Framework, PHP, MySQL, Sass, Bootstrap, JQuery.",
    color: "darkBlue",
  },
];

const Experience = () => {
  return (
    <div className="container relative mx-auto">
      <div id="experience" className="absolute left-0 top-[-100px]"></div>
      <h2 className="mb-10 text-center font-league_spartan text-6xl font-semibold">Experience</h2>
      <div className="grid grid-flow-row grid-cols-2 grid-rows-3 gap-4">
        {experienceItems.map((item, index) => (
          <ExperienceItem
            key={index}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            color={item.color as Color}
            className={index === 0 ? "row-span-2" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
