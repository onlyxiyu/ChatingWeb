export const generateAvatar = (username: string): string => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;
};