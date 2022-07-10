import * as React from 'react';

export const LocationIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
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
        d="M22.5657 1.43432C22.8048 1.67339 22.8677 2.03693 22.723 2.34247L13.723 21.3425C13.5783 21.6478 13.2574 21.8294 12.9212 21.7961C12.5849 21.7628 12.3058 21.5218 12.2239 21.194L10.3403 13.6597L2.80597 11.7761C2.47816 11.6942 2.23719 11.4151 2.20389 11.0788C2.1706 10.7426 2.35216 10.4217 2.65753 10.277L21.6575 1.27701C21.9631 1.13228 22.3266 1.19525 22.5657 1.43432ZM5.36268 10.7661L11.194 12.2239C11.4807 12.2955 11.7045 12.5193 11.7761 12.806L13.234 18.6373L20.3181 3.68191L5.36268 10.7661Z"
        fill="currentColor"
      />
    </svg>
  );
});

LocationIcon.displayName = 'LocationIcon';
