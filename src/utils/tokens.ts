import { storage } from './localStorage';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export const tokenService = {
  getAccess: () => storage.get<string>(ACCESS_TOKEN_KEY),
  setAccess: (token: string) => storage.set(ACCESS_TOKEN_KEY, token),
  removeAccess: () => storage.remove(ACCESS_TOKEN_KEY),

  getRefresh: () => storage.get<string>(REFRESH_TOKEN_KEY),
  setRefresh: (token: string) => storage.set(REFRESH_TOKEN_KEY, token),
  removeRefresh: () => storage.remove(REFRESH_TOKEN_KEY),

  clear: () => {
    storage.remove(ACCESS_TOKEN_KEY);
    storage.remove(REFRESH_TOKEN_KEY);
  },
};
