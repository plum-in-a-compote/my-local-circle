import { LARGE_HEIGHT, LARGE_WIDTH } from './constants';

type LargeCookieIconProps = {
  width?: number;
  height?: number;
  className?: string;
};

// It seems that Google uses some kind of optimization in
// their icons, so to avoid blurry icons, we define variants
export const LargeCookieIcon = ({
  width = LARGE_WIDTH,
  height = LARGE_HEIGHT,
  className,
}: LargeCookieIconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      aria-hidden={true}
      focusable={false}
    >
      <g>
        <rect fill="none" height="20" width="20" />
      </g>
      <g>
        <g>
          <path d="M17.6,9.16c-1.11-0.21-2.16-1.26-2-2.59c0.04-0.34-0.21-0.62-0.55-0.59c-1.93,0.17-3.56-1.44-3.44-3.37 c0.02-0.25-0.14-0.48-0.38-0.52C5.69,1.2,2,5.85,2,10c0,4.42,3.58,8,8,8c4.56,0,8.2-3.81,7.99-8.37 C17.98,9.41,17.82,9.2,17.6,9.16z M6.75,12.5c-0.69,0-1.25-0.56-1.25-1.25S6.06,10,6.75,10S8,10.56,8,11.25S7.44,12.5,6.75,12.5z M8.75,8.5C8.06,8.5,7.5,7.94,7.5,7.25C7.5,6.56,8.06,6,8.75,6S10,6.56,10,7.25C10,7.94,9.44,8.5,8.75,8.5z M12.5,13.25 c-0.41,0-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75c0.41,0,0.75,0.34,0.75,0.75S12.92,13.25,12.5,13.25z" />
        </g>
      </g>
    </svg>
  );
};
