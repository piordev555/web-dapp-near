import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpsCallable, HttpsCallableResult } from 'firebase/functions';

import { functions } from '../../lib/firebase';
import type { AppState } from '../../lib/store';

export interface Project {
  name: string;
  description: string;
  image: string;
}

export interface Projects {
  status: string;
  data: Array<Project>;
}

export interface ProjectState {
  value: HttpsCallableResult<Projects> | null;
  projects: Projects | null;
  projectStatus: 'empty' | 'loading' | 'done';
  status: 'empty' | 'loading' | 'done';
}

const initialState: ProjectState = {
  value: null,
  projects: null,
  projectStatus: 'empty',
  status: 'empty',
};

export const postRequest = async (url: string, body: any) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };

  let data = {};

  try {
    const response = await fetch(url, requestOptions);

    data = await response.json();
  } catch (err) {
    console.log(err);
  }

  return data;
};

const getProjects = httpsCallable(functions, 'api/projects');

export const projectsAsync = createAsyncThunk('projects/get', async () => {
  const response = await getProjects();

  return response;
});

export const createProjectAsync = createAsyncThunk('projects/create', async ({ name, description, image }: Project) => {
  const response = await postRequest(`${process.env.NEXT_PUBLIC_API_URL}/projects/create`, {
    userUID: 'bacis.testnet',
    name,
    description,
    image,
  });

  return response;
});

export const getProjectsAsync = createAsyncThunk('projects/', async () => {
  const response = await postRequest(`${process.env.NEXT_PUBLIC_API_URL}/projects/`, {
    userUID: 'bacis.testnet',
  });

  return response;
});

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProjectAction: (state, action) => {
      if (state.projects?.data) state.projects.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(projectsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(projectsAsync.fulfilled, (state, action) => {
        state.status = 'done';
        state.value = action.payload as any;
      })
      .addCase(createProjectAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProjectAsync.fulfilled, (state, action) => {
        state.status = 'done';
        state.value = action.payload as any;
      })
      .addCase(getProjectsAsync.pending, (state) => {
        state.projectStatus = 'loading';
      })
      .addCase(getProjectsAsync.fulfilled, (state, action) => {
        state.projectStatus = 'done';
        state.projects = action.payload as any;
      });
  },
});

export const { addProjectAction } = projectSlice.actions;

export const selectProjects = (state: AppState) => state.projects.value;

export default projectSlice.reducer;
