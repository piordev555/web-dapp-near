import * as React from 'react';

export const WalletIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
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
      <rect x="15" y="10" width="8" height="4" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.00001 3.20001C2.45361 3.20001 1.20001 4.45361 1.20001 6.00001V18C1.20001 19.5464 2.45362 20.8 4.00001 20.8H20C21.5464 20.8 22.8 19.5464 22.8 18V12.8728C22.5035 13.4832 21.9057 13.9201 21.2 13.9901V18C21.2 18.6628 20.6628 19.2 20 19.2H4.00001C3.33727 19.2 2.80001 18.6628 2.80001 18V6.00001C2.80001 5.33727 3.33727 4.80001 4.00001 4.80001H20C20.6628 4.80001 21.2 5.33727 21.2 6.00001V10.0099C21.9057 10.08 22.5035 10.5168 22.8 11.1272V6.00001C22.8 4.45361 21.5464 3.20001 20 3.20001H4.00001Z"
        fill="currentColor"
      />
    </svg>
  );
});

WalletIcon.displayName = 'WalletIcon';
