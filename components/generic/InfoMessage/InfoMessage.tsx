import { clsx as cx } from 'clsx';

type InfoMessageProps = {
  title: string;
  description: string;
  className?: string;
};

export const InfoMessage = ({ title, description, className = '' }: InfoMessageProps) => {
  return (
    <div
      aria-live="polite"
      className={cx('w-full flex flex-col gap-2 p-3 rounded bg-sky-50', className)}
    >
      <h3 className="text-xs leading-4 font-semibold text-sky-900 sm:text-sm">{title}</h3>
      <p className="text-xs leading-5 font-normal text-sky-800 sm:text-sm sm:leading-6">
        {description}
      </p>
    </div>
  );
};
