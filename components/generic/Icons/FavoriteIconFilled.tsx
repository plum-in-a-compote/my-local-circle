import { clsx as cx } from 'clsx';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from './constants';

type FavoriteIconFilledProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const FavoriteFilledIcon = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  className,
}: FavoriteIconFilledProps) => {
  return (
    <svg
      className={cx('fill-pink-500', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      aria-hidden={true}
      focusable={false}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z" />
    </svg>
  );
};
