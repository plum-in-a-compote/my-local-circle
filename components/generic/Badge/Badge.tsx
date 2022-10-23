import { clsx as cx } from 'clsx';

const colors = {
  amber: ['bg-amber-100', 'text-amber-800'],
  blue: ['bg-blue-100', 'text-blue-800'],
  green: ['bg-green-100', 'text-green-800'],
};

type BadgeProps = {
  textContent: string;
  color: keyof typeof colors;
};

export const Badge = ({ textContent, color }: BadgeProps) => {
  return (
    <div className={cx('flex pb-0.5 px-2 rounded-3xl', colors[color][0])}>
      <span className={cx('text-xs leading-4 font-normal lg:text-sm', colors[color][1])}>
        {textContent}
      </span>
    </div>
  );
};
