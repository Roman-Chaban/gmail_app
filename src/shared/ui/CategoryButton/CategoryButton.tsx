import { type FC } from 'react';

import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ReactNode,
} from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  ariaPressed: boolean;
}

export const CategoryButton: FC<ButtonProps> = ({
  children,
  className = '',
  ariaPressed = false,
  ...props
}) => {
  return (
    <button
      className={`tracking-widest-[0.01em] leading-button-default flex w-full max-w-fit cursor-pointer items-center justify-center rounded-sm p-1 font-medium ${className}`}
      aria-pressed={ariaPressed}
      {...props}
    >
      {children}
    </button>
  );
};
