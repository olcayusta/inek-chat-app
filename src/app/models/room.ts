import { User } from './user';

export interface Room {
  id: number;
  title: string;
  messages: Array<any>;
  message: {
    text: string;
    user: User;
  };
}
