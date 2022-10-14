import { clsx as cx } from 'clsx';

type ErrorMessageProps = {
  title: string;
  description: string;
  className?: string;
};

export const ErrorMessage = ({ title, description, className = '' }: ErrorMessageProps) => {
  return (
    <div
      role="alert"
      className={cx('w-full flex flex-col gap-2 p-3 rounded bg-rose-50', className)}
    >
      <h3 className="text-xs leading-4 font-semibold text-rose-900 sm:text-sm">{title}</h3>
      <p className="text-xs leading-5 font-normal text-rose-800 sm:text-sm sm:leading-6">
        {description}
      </p>
    </div>
  );
};
