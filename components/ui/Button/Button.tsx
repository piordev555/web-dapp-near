import * as React from 'react';
import clsx from 'clsx';

import { Spinner } from 'components/ui';

type ButtonProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'disabled'> & {
  /**
   * required button label
   */
  children: React.ReactNode;
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
   * choose the style variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
};

const SHARED_BUTTON_CLASSES = clsx(
  // base
  'relative h-14 rounded-2xl px-8 shadow-button text-body-lg font-bold',
  // focus
  'focus:outline-none focus:ring-2 focus:ring-secondary ring-offset-2',
  // disabled
  'disabled:cursor-not-allowed'
);

// primary variant styles
const PRIMARY_BUTTON_CLASSES = clsx(
  // base
  'bg-primary text-lightGrey',
  // hover
  'hover:bg-secondary hover:shadow-button-secondary',
  // active
  'active:bg-secondary active:shadow-button-secondary',
  // disabled
  'disabled:bg-opacity-50 disabled:bg-primary disabled:shadow-button'
);

const SECONDARY_BUTTON_CLASSES = clsx(
  // base
  'text-primary border-2 border-primary',
  // hover
  'hover:bg-primary hover:text-lightGrey',
  // active
  'active:bg-primary active:text-lightGrey',
  // disabled
  'disabled:border-opacity-50 disabled:text-opacity-50 disabled:bg-transparent disabled:text-primary'
);

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, isDisabled = false, isLoading = false, variant = 'primary', ...rest } = props;

  const classes = clsx(
    className,
    SHARED_BUTTON_CLASSES,
    variant === 'primary' && PRIMARY_BUTTON_CLASSES,
    variant === 'secondary' && SECONDARY_BUTTON_CLASSES
  );

  return (
    <button ref={ref} type="button" className={classes} disabled={isDisabled || isLoading} {...rest}>
      <span aria-hidden={isLoading} className={clsx(isLoading && 'opacity-0')}>
        {children}
      </span>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner variant={variant} />
        </div>
      )}
    </button>
  );
});

Button.displayName = 'Button';
