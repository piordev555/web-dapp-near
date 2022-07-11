import * as React from 'react';

export const MenuBarIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
  return (
    <svg
      width="32"
      height="16"
      viewBox="0 0 32 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      ref={ref}
      {...props}
    >
      <rect width="32" height="4" rx="2" fill="black" />
      <rect y="12" width="24" height="4" rx="2" fill="black" />
    </svg>
  );
});

MenuBarIcon.displayName = 'MenuBarIcon';
