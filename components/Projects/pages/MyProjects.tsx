import * as React from 'react';

import { AddProject, ProjectCard, ProjectFilter } from '../../items';

interface Project {
  name: string;
  description: string;
  image: string;
}

interface Props {
  projects: Project[];
  onAdd: () => void;
}

export const MyProjects: React.FC<Props> = ({ onAdd, projects }) => {
  return (
    <div className="w-full space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-heading-xl text-center text-gray-900">MY PROJECTS</h2>
        <div className="mt-10 flex flex-col items-center">
          {projects.length ? (
            <div className="hidden sm:block mb-10">
              <ProjectFilter />
            </div>
          ) : null}
          <div className="flex justify-center flex-wrap gap-6">
            <AddProject onAdd={() => onAdd()} />
            {projects.map((project) => {
              return <ProjectCard key={project.name} project={project} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
