import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import { DropdownDownIcon, DropdownUpIcon } from 'components/icons';

const BASE_DROPDOWN_CLASSES = clsx('w-44 py-4 pl-3 pr-7 relative rounded-xl cursor-pointer border');
const OPENED_DROPDOWN_CLASSES = clsx('border-primary');
const CLOSED_DROPDOWN_CLASSES = clsx('border-lightGrey');

interface Props {
  name: string;
  value: string;
  items: string[];
}

export const DropDown: React.FC<Props> = ({ name, value, items }) => {
  const dropDownRef = useRef(null);

  const [selectedValue, setSelectedValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', (event) => handleClickOutside(event));
  }, [dropDownRef]);

  return (
    <div
      className={clsx(BASE_DROPDOWN_CLASSES, isOpen ? OPENED_DROPDOWN_CLASSES : CLOSED_DROPDOWN_CLASSES)}
      ref={dropDownRef}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-row items-center text-body-md">
        {name}: {selectedValue}
      </div>
      <div className="absolute right-3 top-6">{isOpen ? <DropdownUpIcon /> : <DropdownDownIcon />}</div>
      {isOpen && (
        <div className="absolute py-4 w-44 border border-lightGrey rounded-xl top-16 left-0 bg-white">
          {items.map((item) => {
            return (
              <div
                className="text-body-md px-3 py-3 bg-white hover:bg-lightGrey"
                onClick={() => {
                  setSelectedValue(item);
                  setIsOpen(false);
                }}
                key={item}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
