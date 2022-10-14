import { clsx as cx } from 'clsx';

type ErrorAlertProps = {
  title: string;
  description: string;
  className?: string;
};

export const ErrorAlert = ({ title, description, className = '' }: ErrorAlertProps) => {
  return (
    <div role="alert" className={cx('flex flex-col gap-2 p-3 rounded bg-rose-50', className)}>
      <h3 className="text-sm leading-4 font-semibold text-rose-900">{title}</h3>
      <p className="text-xs leading-5 font-normal text-rose-800">{description}</p>
    </div>
  );
};
