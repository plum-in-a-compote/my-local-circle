import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from './constants';

type CheckIconProps = {
  width?: number;
  height?: number;
  className?: string;
  innerFill: string;
};

export const CheckIcon = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  className,
  innerFill,
}: CheckIconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      aria-hidden={true}
      focusable={false}
    >
      <path d="M0 0h24v24H0V0z" fill={innerFill} />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z" />
    </svg>
  );
};
