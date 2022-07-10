import * as React from 'react';
import clsx from 'clsx';

type CardProps = React.ComponentPropsWithoutRef<'div'> & {
  /**
   * required card content
   */
  children: React.ReactNode;
  /**
   * set additional classes
   */
  className?: string;
};

/**
 * Cards are surfaces that display content and actions on a single topic.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, ...rest } = props;

  const classes = clsx(className, 'rounded-3xl shadow bg-white');

  return <div ref={ref} className={classes} {...rest} />;
});

Card.displayName = 'Card';
