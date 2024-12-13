export interface User {
  id: string;
  username: string;
  avatar: string;
}

export interface Message {
  id: string;
  content: string;
  sender: User;
  timestamp: Date;
}