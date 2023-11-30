import { Rule } from "@sanity/types";

const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "startYear",
      title: "Year of Start",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "endYear",
      title: "Year of End",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "techs",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
  ],
};

export default experience;
