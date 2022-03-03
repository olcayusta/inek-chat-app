import {User} from './user';

export interface Message {
  id: number;
  text: string;
  user: User;
  type: string;
}
