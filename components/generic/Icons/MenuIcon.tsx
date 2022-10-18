import { clsx as cx } from 'clsx';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from './constants';

type MenuIconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const MenuIcon = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  className,
}: MenuIconProps) => {
  return (
    <svg
      className={cx('fill-gray-600', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
    </svg>
  );
};
