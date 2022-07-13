import * as React from 'react';

export const DropdownDownIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
  return (
    <svg
      width="8"
      height="4"
      viewBox="0 0 8 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      ref={ref}
      {...props}
    >
      <path d="M1 0.5L4 3.5L7 0.5" stroke="#8383A5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});

DropdownDownIcon.displayName = 'DropdownDownIcon';
