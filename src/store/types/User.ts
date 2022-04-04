export interface IUser {
  id: string;
  name: string;
  firstname: string;
  lastname: string;
  username: string;
  avatar: string;
  uid: string;
  email: string;
  phone: string;
  email_confirm: boolean;
  phone_confirm: boolean;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}
