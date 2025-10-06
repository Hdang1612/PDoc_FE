import userReducer from './user/userSlice';
// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
// Tạo store gốc
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Type cho RootState và AppDispatch (để dùng trong useSelector, useDispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
