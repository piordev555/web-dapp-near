import * as React from 'react';
import { useState } from 'react';
import { DropdownDownIcon, DropdownUpIcon } from 'components/icons';

export const DropDown = (props) => {
  const { name, value, items } = props;
  const [selectedValue, setSelectedValue] = useState(value);
  const [opened, setOpened] = useState(false);

  return (
    <div
      className={
        'w-44 py-4 pl-3 pr-7 relative rounded-xl cursor-pointer border ' +
        (opened ? 'border-primary' : 'border-lightGrey')
      }
    >
      <div className="flex flex-row items-center text-body-md" onClick={() => setOpened(!opened)}>
        {name}: {selectedValue}
      </div>
      <div className="absolute right-3 top-6" onClick={() => setOpened(!opened)}>
        {opened ? <DropdownUpIcon /> : <DropdownDownIcon />}
      </div>
      {opened && (
        <div className="absolute py-4 w-44 border border-lightGrey rounded-xl top-16 left-0 bg-white">
          {items.map((item) => {
            return (
              <div
                className="text-body-md px-3 py-3 bg-white hover:bg-lightGrey"
                onClick={() => {
                  setSelectedValue(item);
                  setOpened(false);
                }}
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
