export const auth = {
  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },
  getRole: (): "admin" | "user" | null => {
    return localStorage.getItem("role") as any;
  },
};
