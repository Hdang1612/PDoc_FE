// src/features/user/userTypes.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  user: User;
}
