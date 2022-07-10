import * as React from 'react';

export const CollectionIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
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
        d="M7 3.80001C6.68174 3.80001 6.37651 3.92644 6.15147 4.15148C5.92643 4.37653 5.8 4.68175 5.8 5.00001V19.4455L11.535 15.349C11.8132 15.1503 12.1868 15.1503 12.465 15.349L18.2 19.4455V5.00001C18.2 4.68175 18.0736 4.37653 17.8485 4.15148C17.6235 3.92644 17.3183 3.80001 17 3.80001H7ZM5.0201 3.02011C5.5452 2.49501 6.25739 2.20001 7 2.20001H17C17.7426 2.20001 18.4548 2.49501 18.9799 3.02011C19.505 3.54521 19.8 4.25741 19.8 5.00001V21C19.8 21.2997 19.6325 21.5742 19.3661 21.7113C19.0996 21.8485 18.7789 21.8252 18.535 21.651L12 16.9831L5.46499 21.651C5.22114 21.8252 4.90039 21.8485 4.63393 21.7113C4.36747 21.5742 4.2 21.2997 4.2 21V5.00001C4.2 4.25741 4.495 3.54522 5.0201 3.02011Z"
        fill="currentColor"
      />
    </svg>
  );
});

CollectionIcon.displayName = 'CollectionIcon';
