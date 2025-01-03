import { UserType } from "./userTypes";

export interface CreateUserType extends Omit<UserType, 'role'> {
  role: {
    connect: {
      id: number;
      name: string;
    };
  };
}