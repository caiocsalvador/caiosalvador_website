import { Rule } from "@sanity/types";

const sections = {
  name: "sections",
  title: "Sections",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "text",
      title: "text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Section Image",
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

export default sections;
