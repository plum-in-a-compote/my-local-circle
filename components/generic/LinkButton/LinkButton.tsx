import { clsx as cx } from 'clsx';
import { MouseEventHandler } from 'react';

type LinkButtonProps = {
  textContent: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const LinkButton = ({ textContent, className = '', onClick }: LinkButtonProps) => {
  return (
    <button
      className={cx(
        'font-semibold text-xs text-blue-800 leading-4 sm:leading-5 sm:text-sm lg:text-base lg:leading-6 focus:outline-none focus:ring focus:ring-blue-300 hover:underline',
        className,
      )}
      onClick={onClick}
    >
      {textContent}
    </button>
  );
};
