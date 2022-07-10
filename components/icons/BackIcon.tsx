import * as React from 'react';

export const BackIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5657 4.43433C12.8781 4.74675 12.8781 5.25328 12.5657 5.5657L6.13137 12L12.5657 18.4343C12.8781 18.7467 12.8781 19.2533 12.5657 19.5657C12.2533 19.8781 11.7467 19.8781 11.4343 19.5657L4.43431 12.5657C4.12189 12.2533 4.12189 11.7467 4.43431 11.4343L11.4343 4.43433C11.7467 4.12191 12.2533 4.12191 12.5657 4.43433Z"
        fill="currentColor"
      />
    </svg>
  );
});

BackIcon.displayName = 'BackIcon';
