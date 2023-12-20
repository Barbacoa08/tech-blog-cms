import { CollectionConfig } from "payload/types";

import { isAdmin, isAdminFieldLevel, isAdminOrSelf } from "../access";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    // Email added by default
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "roles",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: "select",
      hasMany: true,
      defaultValue: ["editor"],
      access: {
        // Only admins can create or update a value for this field
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Editor",
          value: "editor",
        },
      ],
    },
  ],
};
