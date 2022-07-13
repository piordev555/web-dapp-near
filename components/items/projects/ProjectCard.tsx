import React, { useEffect, useRef } from 'react';

interface Project {
  name: string;
  description: string;
  image: string;
}

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  console.log(project);
  const url = project.image;
  const avatarRef = useRef(null);

  useEffect(() => {
    avatarRef.current.style.backgroundImage = `url(` + url + `)`;
  }, []);

  return (
    <div className="border border-lightGrey w-312 sm:w-308 md:w-64 h-80 rounded-3xl bg-white flex flex-col items-center ">
      <div className="flex flex-col items-center justify-between w-full h-210 py-6">
        <div className="w-72p h-72 bg-primary rounded-full bg-cover bg-no-repeat bg-center" ref={avatarRef}></div>
        <div className="flex flex-col items-center">
          <p className="text-heading-md uppercase">{project.name}</p>
          <p className="font-normal text-body-sm text-darkGrey">{project.description}</p>
        </div>
        <div className="w-24 h-1 rounded-md bg-lightGrey"></div>
      </div>
      <div className="flex flex-row w-full h-60">
        <div className="flex flex-col items-center justify-center border border-lightGrey border-l-0 w-1/2">
          <p className="text-heading-sm">0</p>
          <p className="text-body-sm font-normal text-darkGrey">Redeemed</p>
        </div>
        <div className="flex flex-col items-center justify-center border border-lightGrey border-l-0 border-r-0 w-1/2">
          <p className="text-heading-sm">0</p>
          <p className="text-body-sm font-normal text-darkGrey">Total items</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full h-16 px-4">
        <p className="text-body-sm font-normal text-darkGrey">Status</p>
        <p className="text-body-sm font-normal text-black">Active</p>
      </div>
    </div>
  );
};
