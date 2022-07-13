import * as React from 'react';
import { useState } from 'react';

import { FileInputPreview } from '../../Auth/fileInput/fileInput';

interface Props {
  onAdded: (project) => void;
}

export const AddNewProject: React.FC<Props> = ({ onAdded }) => {
  const [projectName, setProjectName] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [image, setImage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onAdded({
      name: projectName,
      description: subTitle,
      image: image,
    });
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-heading-xl text-center text-gray-900">
          ADD NEW PROJECT
        </h2>
        <form className="mt-8 flex flex-col items-center" onSubmit={onSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div>
            <FileInputPreview imageChanged={(img) => setImage(img)} />
          </div>
          <div className="-space-y-px w-72 sm:w-80 rounded-md shadow-sm flex flex-col gap-4">
            <div>
              <label htmlFor="project-name" className="sr-only">
                Project name
              </label>
              <input
                id="project-name"
                name="projectname"
                type="text"
                autoComplete="projectname"
                required
                className="w-full px-5 py-4 text-body-md placeholder-gray-500 border border-darkGrey rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Project name"
                value={projectName}
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="subtitle" className="sr-only">
                Subtitle
              </label>
              <input
                id="subtitle"
                name="subtitle"
                type="text"
                autoComplete="subtitle"
                required
                className="w-full px-5 py-4 text-body-md placeholder-gray-500 border border-darkGrey rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Subtitle"
                value={subTitle}
                onChange={(e) => {
                  setSubTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text- text-white w-72 sm:w-80 mt-10 py-4 rounded-lg transition-all  delay-300"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
