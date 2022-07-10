import * as React from 'react';

export const CloseIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
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
        d="M18.5657 5.43433C18.8781 5.74675 18.8781 6.25328 18.5657 6.5657L6.56569 18.5657C6.25327 18.8781 5.74673 18.8781 5.43432 18.5657C5.1219 18.2533 5.1219 17.7467 5.43432 17.4343L17.4343 5.43433C17.7467 5.12191 18.2533 5.12191 18.5657 5.43433Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.43432 5.43433C5.74673 5.12191 6.25327 5.12191 6.56569 5.43433L18.5657 17.4343C18.8781 17.7467 18.8781 18.2533 18.5657 18.5657C18.2533 18.8781 17.7467 18.8781 17.4343 18.5657L5.43432 6.5657C5.1219 6.25328 5.1219 5.74675 5.43432 5.43433Z"
        fill="currentColor"
      />
    </svg>
  );
});

CloseIcon.displayName = 'CloseIcon';
