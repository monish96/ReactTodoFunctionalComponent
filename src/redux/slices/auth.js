import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../services/dryApiMethods';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: '',
  todos: [],
};

export const loginAction = createAsyncThunk(
  'auth/Login',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.methods.postData(
        'http://secure.focusrtech.com:3030/techstep/api/auth/signin',
        payload
      );
      console.log('🚀 => response', response);

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllTodoAction = createAsyncThunk(
  'auth/GetTodo',
  async (_payload, { rejectWithValue }) => {
    try {
      const response = await api.methods.getData(
        'https://jsonplaceholder.typicode.com/todos'
      );
      console.log('🚀 => response', response);

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const getAllTodoAction = createAsyncThunk(
//   'auth/GetTodo',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await api.methods.getData(
//         'https://jsonplaceholder.typicode.com/todos'
//       );
//       console.log('🚀 => response', response);

//       if (response.status === 200) {
//         return response.data;
//       }
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    stoploading(state) {
      state.isLoading = false;
    },
    setLogOut(state) {
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },

  extraReducers: {
    // Button should be in loading state
    [loginAction.pending]: (state) => {
      state.isLoading = true;
    },
    [loginAction.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = payload;
      state.error = '';
    },
    [loginAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Get all todo
    [getAllTodoAction.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllTodoAction.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.todos = payload;
    },
    [getAllTodoAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, stoploading, setLogOut } = slice.actions;

//Selectors
export const selectIsLoadingFromAuth = (state) => state.auth.isLoading;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectCurrentUser = (state) => state.auth.user;
export const selectLoginError = (state) => state.auth.error;
export const selectTodos = (state) => state.auth.todos;
