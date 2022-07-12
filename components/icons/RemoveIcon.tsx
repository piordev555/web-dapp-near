import * as React from 'react';

export const RemoveIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E9E9E9" />
      <path d="M16 8L8 16" stroke="#F771A1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8L16 16" stroke="#F771A1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});

RemoveIcon.displayName = 'RemoveIcon';
