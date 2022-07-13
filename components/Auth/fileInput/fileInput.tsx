import React, { useState, useRef, useEffect } from 'react';

import { RemoveIcon } from 'components/icons';

interface Props {
  imageChanged?: (image: string) => void;
}

export const FileInputPreview: React.FC<Props> = ({ imageChanged }) => {
  const defaultImage = '/user.png';
  const previewRef = useRef(null);
  const imageInputRef = useRef(null);
  const [file, setFile] = useState(defaultImage);
  const [isSelected, setSelected] = useState(false);

  const ImageChanged = (e) => {
    e.preventDefault();
    const files = imageInputRef.current.files[0];

    if (files) {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(files);

      fileReader.addEventListener('load', function () {
        const background = this.result;

        setFile(background);
        setSelected(true);
      });
    }
  };

  const RemoveImage = () => {
    setFile(defaultImage);
    setSelected(false);
  };

  useEffect(() => {
    imageChanged && imageChanged(file);
    previewRef.current.style.backgroundImage = `url(` + file + `)`;
  }, [file]);

  return (
    <div className="relative">
      <input
        ref={imageInputRef}
        name="img"
        id="img"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={ImageChanged}
      />
      {isSelected && (
        <div className="w-6 h-6 flex items-center justify-center absolute right-0" onClick={() => RemoveImage()}>
          <RemoveIcon />
        </div>
      )}
      <label htmlFor="img" className="flex flex-col items-center">
        <div
          ref={previewRef}
          className="w-22 h-22 rounded-full border-2 border-lightGrey bg-white bg-cover bg-no-repeat bg-center transition-all ease-in-out delay-500"
        ></div>
        <div className="mt-1 mb-6 text-primary text-sm cursor-pointer">{isSelected ? 'Change' : 'Add photo'}</div>
      </label>
    </div>
  );
};
