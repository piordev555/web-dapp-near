import * as React from 'react';
import clsx from 'clsx';

type ButtonProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'children'> & {
  /**
   * required svg icon
   */
  Icon: React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>;
  /**
   * required aria-label
   */
  ariaLabel: string;
  /**
   * set additional classes
   */
  className?: string;
  /**
   * set disabled status
   * @default false
   */
  isDisabled?: boolean;
  /**
   * set loading status
   * @default false
   */
  isLoading?: boolean;
  /**
   * choose the color
   * @default 'default'
   */
  color?: 'default' | 'error';
};

const SHARED_ICON_BUTTON_CLASSES = clsx(
  // base
  'rounded-full bg-lightGrey p-4',
  //hover
  'hover:bg-black hover:text-white'
);

const ERROR_ICON_BUTTON_CLASSES = clsx(
  // base
  'bg-error text-white'
);

export const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { Icon, ariaLabel, className, isDisabled = false, isLoading = false, color = 'default' } = props;

  const classes = clsx(className, SHARED_ICON_BUTTON_CLASSES, color === 'error' && ERROR_ICON_BUTTON_CLASSES);

  return (
    <button ref={ref} aria-label={ariaLabel} type="button" className={classes} disabled={isDisabled || isLoading}>
      <Icon />
    </button>
  );
});

IconButton.displayName = 'IconButton';
