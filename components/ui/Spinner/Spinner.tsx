import { motion } from 'framer-motion';
import clsx from 'clsx';

type SpinnerProps = {
  /**
   * set additional classes
   */
  className?: string;
  /**
   * select color variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
};

export function Spinner(props: SpinnerProps) {
  const { className, variant = 'primary' } = props;
  const classes = clsx(className, variant === 'primary' && 'text-lightGrey', variant === 'secondary' && 'text-primary');

  return (
    <motion.svg
      aria-label="loading"
      role="img"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
      className={classes}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.0009" cy="12.0009" r="10.5009" stroke="black" strokeWidth="2" strokeMiterlimit="16" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.5C5.64866 0.500462 0.5 5.64941 0.5 12.0009C0.5 18.3526 5.64912 23.5018 12.0009 23.5018C18.3526 23.5018 23.5018 18.3526 23.5018 12.0009C23.5018 12.0006 23.5018 12.0003 23.5018 12.0001H21.5018C21.5018 12.0003 21.5018 12.0006 21.5018 12.0009C21.5018 17.2481 17.2481 21.5018 12.0009 21.5018C6.75369 21.5018 2.5 17.2481 2.5 12.0009C2.5 6.75397 6.75323 2.50046 12 2.5V0.5Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}
