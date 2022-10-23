import { clsx as cx } from 'clsx';

type SuccessMessageProps = {
  title: string;
  description?: string;
  className?: string;
};

export const SuccessMessage = ({
  title,
  description = '',
  className = '',
}: SuccessMessageProps) => {
  return (
    <div
      aria-live="polite"
      className={cx(
        'w-fit flex flex-col gap-2 p-3 rounded bg-green-50',
        description && 'w-full',
        className,
      )}
    >
      <h3 className="text-xs leading-4 font-semibold text-green-900 sm:text-sm">{title}</h3>
      {description && (
        <p className="text-xs leading-5 font-normal text-green-800 sm:text-sm sm:leading-6">
          {description}
        </p>
      )}
    </div>
  );
};
