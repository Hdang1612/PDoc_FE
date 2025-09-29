
export const storage = {
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get: <T = any>(key: string, defaultValue?: T): T | null => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue ?? null;
  },

  remove: (key: string) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};
