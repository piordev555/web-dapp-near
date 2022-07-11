import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

import { RemoveIcon } from 'components/icons';

export function FileInputPreview() {
  const defaultImage = '/user.png';
  const previewRef = useRef(null);
  const imageInputRef = useRef(null);
  const [file, setFile] = useState(defaultImage);
  const [selected, setSelected] = useState(false);

  const ImageChanged = (e) => {
    const files = imageInputRef.current.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener('load', function () {
        const background = this.result;
        console.log(background);
        // previewRef.current.style.backgroundImage = background;
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
      {selected && (
        <div className="w-6 h-6 flex items-center justify-center absolute right-0" onClick={() => RemoveImage()}>
          <RemoveIcon />
        </div>
      )}
      <label htmlFor="img" className="flex flex-col items-center">
        <div
          ref={previewRef}
          className="w-22 h-22 rounded-full border-2 border-lightGrey bg-white bg-cover bg-no-repeat bg-center transition-all ease-in-out delay-500"
        ></div>
        <div className="mt-1 mb-6 text-primary text-sm cursor-pointer" onClick={() => setSelected(true)}>
          {selected ? 'Change' : 'Add photo'}
        </div>
      </label>
    </div>
  );
}
