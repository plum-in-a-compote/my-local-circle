import { clsx as cx } from 'clsx';
import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from './constants';

type NotificationsIconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const NotificationsIcon = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  className,
}: NotificationsIconProps) => {
  return (
    <svg
      className={cx('fill-gray-600', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      aria-hidden={true}
      focusable={false}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19.29 17.29L18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.9 0 1.34-1.08.71-1.71zM16 17H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z" />
    </svg>
  );
};
