import { create } from 'zustand';
import type { Message } from '../types';

interface MessagesState {
  messages: Message[];
  addMessage: (message: Message) => void;
}

export const useMessagesStore = create<MessagesState>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));