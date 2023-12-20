import Password from "payload/dist/admin/components/forms/field-types/Password";
import { CollectionConfig } from "payload/types";

import { isAdmin, isEditorOrAdmin } from "../access";
import { accordionField } from "../fields/accordions";
import { slugField } from "../fields/slug";

export const Program: CollectionConfig = {
  slug: "program",
  admin: {
    defaultColumns: ["title", "author", "status"],
    useAsTitle: "title",
  },
  access: {
    create: isEditorOrAdmin,
    read: () => true,
    update: isEditorOrAdmin,
    delete: isAdmin,
  },
  fields: [
    slugField(),
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "passcode",
      type: "text",
      required: true,
      admin: {
        components: {
          Field: Password,
        },
      },
    },
    {
      name: "content",
      type: "richText",
    },
    accordionField,
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        {
          value: "draft",
          label: "Draft",
        },
        {
          value: "published",
          label: "Published",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
};
