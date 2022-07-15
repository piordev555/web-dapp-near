import React, { useState, useEffect } from 'react';

import { AddNewProject, MyProjects } from 'components/Projects';
import type { AppState } from 'lib/store';

import { createProjectAsync, getProjectsAsync } from '../components/Projects/projectSlice';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import type { Project } from '../components/Projects/projectSlice';
import { addProjectAction } from '../components/Projects/projectSlice';
import Metatags from '../components/Metatags';

export default function Projects() {
  const dispatch = useAppDispatch();

  const allStatus = {
    explorer: 'explorer',
    add: 'add',
  };

  const projs = useAppSelector((state: AppState) => state.projects);

  const [status, setStatus] = useState(allStatus.explorer);
  const [projects, setProjects] = useState<Project[]>(projs.projects?.data == undefined ? [] : projs.projects?.data);

  useEffect(() => {
    dispatch(getProjectsAsync());
  }, []);

  useEffect(() => {
    setProjects(projs.projects?.data == undefined ? [] : projs.projects?.data);
  }, [projs]);

  const addProject = (project: Project) => {
    dispatch(createProjectAsync(project));
    dispatch(addProjectAction([...projects, project]));
    setStatus(allStatus.explorer);
  };

  return (
    <main>
      <Metatags title="Projects" description="Explore my projects" />
      <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        {status == allStatus.explorer && <MyProjects projects={projects} onAdd={() => setStatus(allStatus.add)} />}
        {status == allStatus.add && <AddNewProject onAdded={(project) => addProject(project)} />}
      </div>
    </main>
  );
}
