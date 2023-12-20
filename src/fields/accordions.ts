import { Field } from "payload/types";

export const accordionField: Field = {
  name: "accordions",
  label: "Accordions",
  type: "array",
  fields: [
    {
      name: "accordionheader",
      label: "Accordion Container Header",
      type: "text",
      required: true,
    },
    {
      name: "accordionItems",
      label: "Accordion Items",
      type: "array",
      fields: [
        {
          name: "accordionitemheader",
          label: "Accordion Item Header",
          type: "text",
          required: false,
        },
        {
          name: "accordionitemcontent",
          label: "Accordion Item Content",
          type: "richText",
          required: true,
        },
      ],
    },
  ],
};
