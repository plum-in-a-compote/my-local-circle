import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from './constants';

type CircleIconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const CircleIcon = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  className,
}: CircleIconProps) => {
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
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z" />
        </g>
      </g>
    </svg>
  );
};
