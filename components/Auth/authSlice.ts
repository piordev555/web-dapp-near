import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { auth } from '../../lib/firebase';
import type { AppState } from '../../lib/store';

export interface AuthState {
  value: string | null;
  status: 'offline' | 'loading' | 'online';
}

interface LoginData {
  email: string;
  password: string;
}

const initialState: AuthState = {
  value: null,
  status: 'offline',
};

export const loginAsync = createAsyncThunk('auth/login', async (loginData: LoginData) => {
  const { email, password } = loginData;
  const response = await signInWithEmailAndPassword(auth, email, password);

  return response.user.uid;
});

export const logOutAsync = createAsyncThunk('auth/logout', async () => await signOut(auth));

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'online';
        state.value = action.payload;
      })
      .addCase(logOutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logOutAsync.fulfilled, (state, action) => {
        state.status = 'offline';
        state.value = null;
      });
  },
});

export const selectUser = (state: AppState) => state.auth.value;

export default authSlice.reducer;
