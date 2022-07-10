import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpsCallable, HttpsCallableResult } from 'firebase/functions';

import { functions } from '../../lib/firebase';
import type { AppState } from '../../lib/store';

export interface Project {
  name: string;
  description: string;
  timestamp: string;
}

export interface Projects {
  status: string;
  data: Array<Project>;
}

export interface ProjectState {
  value: HttpsCallableResult<Projects> | null;
  status: 'empty' | 'loading' | 'done';
}

const initialState: ProjectState = {
  value: null,
  status: 'empty',
};

const getProjects = httpsCallable(functions, 'api/projects');

export const projectsAsync = createAsyncThunk('projects/get', async () => {
  const response = await getProjects();

  return response;
});

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(projectsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(projectsAsync.fulfilled, (state, action) => {
        state.status = 'done';
        state.value = action.payload as any;
      });
  },
});

export const selectProjects = (state: AppState) => state.projects.value;

export default projectSlice.reducer;
