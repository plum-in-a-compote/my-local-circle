import { clsx as cx } from 'clsx';
import { MouseEventHandler } from 'react';

type LinkButtonProps = {
  textContent: string;
  className?: string;
  underline?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const LinkButton = ({
  textContent,
  className = '',
  underline = false,
  onClick,
}: LinkButtonProps) => {
  return (
    <button
      className={cx(
        'w-fit text-xs text-blue-700 leading-4 hover:underline sm:leading-5 sm:text-sm lg:text-base lg:leading-6 focus:text-blue-800 focus:outline-none focus:ring focus:ring-blue-300',
        className,
        underline && 'underline',
      )}
      onClick={onClick}
    >
      {textContent}
    </button>
  );
};
