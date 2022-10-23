import { clsx as cx } from 'clsx';
import { MouseEventHandler } from 'react';

type TextButtonProps = {
  content: string;
  className?: string;
  underline?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const TextButton = ({ content, underline = false, className, onClick }: TextButtonProps) => {
  return (
    <button
      className={cx(
        'w-fit text-xs text-blue-700 leading-4 sm:leading-5 sm:text-sm lg:text-base lg:leading-6 focus:text-blue-800 focus:outline-none focus:ring focus:ring-blue-300',
        underline && 'underline',
        className,
      )}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
