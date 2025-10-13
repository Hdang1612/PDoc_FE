// src/features/auth/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse, User } from '../../interface/user';
import { loginService, getProfileService, logoutService } from '../../api/authService';
import { tokenService } from '../../utils/tokens';

interface AuthState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: string }
>('auth/loginUser', async (payload, { rejectWithValue }) => {
  try {
    const response = await loginService(payload);
    return response as AuthResponse;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

export const fetchUserProfile = createAsyncThunk<User, void, { rejectValue: string }>(
  'auth/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProfileService();
      return response as User;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Fetch profile failed');
    }
  }
);

export const logoutUser = createAsyncThunk<boolean, void, { rejectValue: string }>(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await logoutService();
      return true;
    } catch {
      return rejectWithValue('Logout failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.loading = false;
        state.currentUser = action.payload.user;
        tokenService.setAccess(action.payload.accessToken)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.currentUser = null;
    });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
