export interface UserType {
  id?: number;
  name: string;
  age: number;
  email: string;
  role: UserRoleType;
}

export interface UserRoleType {
  id?: number;
  name: string;
}
