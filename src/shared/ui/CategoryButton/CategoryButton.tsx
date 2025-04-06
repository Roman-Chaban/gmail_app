import { type FC } from 'react';

import { type ButtonHTMLAttributes, type DetailedHTMLProps, type ReactNode } from 'react';

import clsx from 'clsx';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  ariaPressed?: boolean;
  variant: 'primary' | 'secondary' | 'third';
}

export const CategoryButton: FC<ButtonProps> = ({
  children,
  className,
  ariaPressed,
  variant,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'leading-button-default flex w-full max-w-fit cursor-pointer items-center justify-center rounded-sm p-1 font-medium tracking-[0.01em]',
        {
          'bg-promotions-badge-first': variant === 'primary',
          'bg-social-badge-first': variant === 'secondary',
          'bg-updates-badge-first': variant === 'third',
        },
        className,
      )}
      aria-pressed={ariaPressed}
      {...props}
    >
      {children}
    </button>
  );
};
