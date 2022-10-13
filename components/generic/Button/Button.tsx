import { MouseEventHandler } from 'react';
import { clsx as cx } from 'clsx';

type ButtonProps = {
  content: string;
  variant: keyof typeof variants;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const variants = {
  primary: 'bg-blue-700 text-indigo-50 font-semibold hover:bg-blue-500',
  secondary: 'bg-blue-100 text-blue-800 font-semibold',
  secondaryLight: 'bg-blue-100 text-blue-800 font-normal',
  secondaryGray: 'bg-gray-200 text-gray-800 font-normal',
  plain: 'bg-gray-50 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200',
};

export const Button = ({ content, variant, className, onClick }: ButtonProps) => {
  return (
    <button
      className={cx(
        'align-baseline rounded px-4 py-2 text-xs leading-4 transition-colors sm:px-8 sm:py-2 sm:text-sm sm:leading-5 lg:px-24 lg:py-3 lg:text-base lg:leading-6 focus:outline-none focus:ring focus:ring-blue-300',
        variants[variant],
        className,
      )}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
