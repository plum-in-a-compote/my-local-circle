import { MouseEventHandler } from 'react';
import { getButtonSize, ButtonSize } from './getButtonSize';
import { getButtonVariant, ButtonVariant } from './getButtonVariant';
import { clsx as cx } from 'clsx';

type ButtonProps = {
  content: string;
  variant: ButtonVariant;
  size: ButtonSize;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ content, variant, size, className, onClick }: ButtonProps) => {
  return (
    <button
      className={cx(
        'align-baseline rounded',
        getButtonVariant(variant),
        getButtonSize(size),
        className,
      )}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
