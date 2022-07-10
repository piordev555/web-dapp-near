import * as React from 'react';
import { HttpsCallableResult } from 'firebase/functions';

import { projectsAsync, selectProjects } from './projectSlice';
import { Row } from './Row';
import type { Project, Projects } from './projectSlice';

import { useAppDispatch, useAppSelector } from '../../lib/hooks';

export function List() {
  const dispatch = useAppDispatch();
  const projects: HttpsCallableResult<Projects> | null = useAppSelector(selectProjects);

  React.useEffect(() => {
    dispatch(projectsAsync());
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects?.data?.data.map((project: Project, index: number) => (
                  <Row
                    key={index}
                    name={project.name}
                    description={project.description}
                    timestamp={project.timestamp}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
