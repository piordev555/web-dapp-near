import * as React from 'react';

export const DropdownUpIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
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
      <path d="M7 3.5L4 0.5L1 3.5" stroke="#7871FF" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});

DropdownUpIcon.displayName = 'DropdownUpIcon';
