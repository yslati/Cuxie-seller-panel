import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  username: null,
  loading: false,
  error: null,
};

const users = ["Əli Quliyev", "Səidə Məmmədova", "Məhəmməd Əlizadə"];

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<{ username: string}>) {
      state.loading = false;
      state.isAuthenticated = true;
      state.username = action.payload.username;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.username = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export const login =
  ({ username, password }: { username: string; password: string }) =>
  async (dispatch: any) => {
    dispatch(loginStart());
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!users.includes(username)) {
        console.log(username);
        throw new Error('User not found');
      }
      if (password !== '1234') {
        console.log(password);
        throw new Error('Invalid password');
      }

      dispatch(loginSuccess({ username }));
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

export default authSlice.reducer;
