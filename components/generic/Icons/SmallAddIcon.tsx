import { SMALL_WIDTH, SMALL_HEIGHT } from './constants';

type SmallAddIconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const SmallAddIcon = ({
  width = SMALL_WIDTH,
  height = SMALL_HEIGHT,
  className,
}: SmallAddIconProps) => {
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
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
    </svg>
  );
};
