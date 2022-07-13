import * as React from 'react';

import { PlusIcon } from 'components/icons';

interface Props {
  onAdd: () => void;
}

export const AddProject: React.FC<Props> = ({ onAdd }) => {
  return (
    <div className="border border-dashed border-primary w-312 sm:w-308 md:w-64 h-80 rounded-3xl bg-lightPrimary flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <button
          className="w-14 h-14 bg-primary rounded-full flex flex-col items-center justify-center"
          onClick={() => onAdd()}
        >
          <PlusIcon className="text-white" />
        </button>
        <p className="mt-3 text-sm text-primary font-normal">Add new project</p>
      </div>
    </div>
  );
};
