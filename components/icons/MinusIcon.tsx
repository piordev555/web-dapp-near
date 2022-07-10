import * as React from 'react';

export const MinusIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.2 12C4.2 11.5582 4.55817 11.2 5 11.2H19C19.4418 11.2 19.8 11.5582 19.8 12C19.8 12.4418 19.4418 12.8 19 12.8H5C4.55817 12.8 4.2 12.4418 4.2 12Z"
        fill="currentColor"
      />
    </svg>
  );
});

MinusIcon.displayName = 'MinusIcon';
