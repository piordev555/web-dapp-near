import * as React from 'react';

export const LogoIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      ref={ref}
      {...props}
    >
      <path
        d="M39.8269 8.92706V0H8.00002C3.58173 0 0 3.58172 0 8.00001V32.0001C0 36.4183 3.58173 40.0001 8.00002 40.0001H39.8269V31.2447H8.3117V8.92706H39.8269Z"
        fill="black"
      />
      <ellipse cx="33.0736" cy="20.086" rx="6.92642" ry="6.86697" fill="#7871FF" />
    </svg>
  );
});

LogoIcon.displayName = 'LogoIcon';
