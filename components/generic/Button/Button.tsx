import { MouseEventHandler } from 'react';
import { getButtonSize, ButtonSize } from './getButtonSize';
import { getButtonColor, ButtonColor } from './getButtonColor';
import { clsx as cx } from 'clsx';

type ButtonProps = {
  content: string;
  color: ButtonColor;
  size: ButtonSize;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ content, color, size, className, onClick }: ButtonProps) => {
  return (
    <button
      className={cx(
        'align-baseline rounded',
        getButtonColor(color),
        getButtonSize(size),
        className,
      )}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
