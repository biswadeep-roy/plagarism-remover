export interface User {
  _id: string;
  email: string;
  name: string;
}

export interface ParaphrasedText {
  _id: string;
  userId: string;
  originalText: string;
  paraphrasedText: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}