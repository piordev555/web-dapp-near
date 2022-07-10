import * as React from 'react';

export const SearchIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
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
        d="M11 3.80001C7.02356 3.80001 3.80001 7.02356 3.80001 11C3.80001 14.9765 7.02356 18.2 11 18.2C14.9765 18.2 18.2 14.9765 18.2 11C18.2 7.02356 14.9765 3.80001 11 3.80001ZM2.20001 11C2.20001 6.13991 6.13991 2.20001 11 2.20001C15.8601 2.20001 19.8 6.13991 19.8 11C19.8 15.8601 15.8601 19.8 11 19.8C6.13991 19.8 2.20001 15.8601 2.20001 11Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0843 16.0843C16.3967 15.7719 16.9033 15.7719 17.2157 16.0843L21.5657 20.4343C21.8781 20.7467 21.8781 21.2533 21.5657 21.5657C21.2533 21.8781 20.7467 21.8781 20.4343 21.5657L16.0843 17.2157C15.7719 16.9033 15.7719 16.3967 16.0843 16.0843Z"
        fill="currentColor"
      />
    </svg>
  );
});

SearchIcon.displayName = 'SearchIcon';
