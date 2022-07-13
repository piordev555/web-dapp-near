import * as React from 'react';
import { DropDown } from '../elements';

export function ProjectFilter() {
  return (
    <div className="flex flex-row items-center justify-center flex-wrap gap-4">
      <DropDown name="Status" value="Active" items={['Active', 'InActive']} />
      <DropDown name="Type" value="All" items={['All', 'Option 1', 'Option 2', 'Option 3']} />
      <DropDown name="Sort" value="Most redeemed" items={['Most redeemed', 'Option 1', 'Option 2']} />
    </div>
  );
}
