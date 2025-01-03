import { UserRoleType } from "../types/userTypes";

export const getRoleNameById = (roles: UserRoleType[], id: number) => {
  const role = roles.find((role) => role.id === id);
  return role ? role.name : 'Unknown'; // Return 'Unknown' if the id is not found
};