import { clsx as cx } from 'clsx';

type WarningMessageProps = {
  title: string;
  description: string;
  className?: string;
};

export const WarningMessage = ({ title, description, className = '' }: WarningMessageProps) => {
  return (
    <div
      aria-live="polite"
      className={cx('w-full flex flex-col gap-2 p-3 rounded bg-yellow-50', className)}
    >
      <h3 className="text-xs leading-4 font-semibold text-yellow-900 sm:text-sm">{title}</h3>
      <p className="text-xs leading-5 font-normal text-yellow-800 sm:text-sm sm:leading-6">
        {description}
      </p>
    </div>
  );
};
