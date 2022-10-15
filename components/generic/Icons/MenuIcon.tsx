import { clsx as cx } from 'clsx';

type MenuIconProps = {
  width: number;
  height: number;
  className?: string;
};

export const MenuIcon = ({ width, height, className }: MenuIconProps) => {
  return (
    <svg
      className={cx('fill-gray-700', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z" />
    </svg>
  );
};
