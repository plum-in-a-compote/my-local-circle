import { MouseEventHandler } from 'react';
import { getButtonVariant, ButtonVariant } from './getButtonVariant';
import { clsx as cx } from 'clsx';

type ButtonProps = {
  content: string;
  variant: ButtonVariant;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ content, variant, type = 'button', className, onClick }: ButtonProps) => {
  return (
    <button
      className={cx(
        'align-baseline rounded px-4 py-2 text-xs leading-4 transition-colors sm:px-8 sm:py-2 sm:text-sm sm:leading-5 lg:px-24 lg:py-3 lg:text-base lg:leading-6 focus:outline-none focus:ring focus:ring-blue-300',
        getButtonVariant(variant),
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
