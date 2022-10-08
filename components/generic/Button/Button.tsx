import { MouseEventHandler } from 'react';
import { getButtonSize, buttonSize } from './getButtonSize';
import { getButtonColor, buttonColor } from './getButtonColor';
import { clsx as cx } from 'clsx';

type ButtonProps = {
  name: string;
  color: buttonColor;
  size: buttonSize;
  isLight?: boolean;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ name, color, size, isLight, className, onClick }: ButtonProps) => {
  return (
    <button
      className={cx(
        'align-baseline rounded',
        getButtonColor(color),
        getButtonSize(size),
        isLight ? 'font-normal' : 'font-semibold',
        className,
      )}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
