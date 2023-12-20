import { Access, FieldAccess } from "payload/types";

import { User } from "../payload-types";

export const isEditorOrAdmin: Access<any, User> = ({ req: { user } }) => {
  return (
    Boolean(user?.roles?.includes("editor")) ||
    Boolean(user?.roles?.includes("admin"))
  );
};
