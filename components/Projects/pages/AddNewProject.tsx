import * as React from 'react';
import { useState } from 'react';

import { FileInputPreview } from '../../Auth/fileInput/fileInput';
import { Input } from '../../items/elements';

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
            <Input label="Project name" value={projectName} onChange={(name) => setProjectName(name)} />
            <Input label="Subtitle" value={subTitle} onChange={(title) => setSubTitle(title)} />
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
