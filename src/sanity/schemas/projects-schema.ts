import { Rule } from "@sanity/types";

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Project Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Project Description",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Project Link",
      type: "url",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "repoLink",
      title: "Repository Link",
      type: "url",
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
    {
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    },
  ],
};

export default project;
