import { clsx as cx } from 'clsx';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from './constants';

type AccountIconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const AccountIcon = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  className,
}: AccountIconProps) => {
  return (
    <svg
      className={cx('fill-gray-600', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
};
