import { MouseEventHandler } from 'react';
import { getButtonVariant, ButtonVariant } from './getButtonVariant';
import { clsx as cx } from 'clsx';

type ButtonProps = {
  content: string;
  variant: ButtonVariant;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ content, variant, className, onClick }: ButtonProps) => {
  return (
    <button
      className={cx(
        'align-baseline rounded px-4 py-2 text-xs leading-4 sm:px-8 sm:py-2 sm:text-sm sm:leading-5 md:px-24 md:py-3 md:text-base md:leading-6',
        getButtonVariant(variant),
        className,
      )}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
