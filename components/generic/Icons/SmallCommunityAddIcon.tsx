import { clsx as cx } from 'clsx';
import { SMALL_HEIGHT, SMALL_WIDTH } from './constants';

type SmallCommunityAddIconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const SmallCommunityAddIcon = ({
  width = SMALL_WIDTH,
  height = SMALL_HEIGHT,
  className,
}: SmallCommunityAddIconProps) => {
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
        <path d="M5,15.5H3.5V14H5V15.5z M5,12.33H3.5v-1.5H5V12.33z M5,9.17H3.5v-1.5H5V9.17z M5,6H3.5V4.5H5V6z M8.5,15.5H7V14h1.5V15.5z M8.5,12.33H7v-1.5h1.5V12.33z M8.5,9.17H7v-1.5h1.5V9.17z M7,6V4.5h1.5V6H7z M18,12.5V7c0-0.55-0.45-1-1-1h-7V4c0-0.55-0.45-1-1-1 H3C2.45,3,2,3.45,2,4v12c0,0.55,0.45,1,1,1h10.5v-1.5H10v-1.67h1.5v-1.5H10v-1.67h1.5v-1.5H10V7.5h6.5v5H18z M13.5,9.17H15v1.5 h-1.5V9.17z M13.5,12.33H15v1.5h-1.5V12.33z M19.5,16.25c0-0.41-0.34-0.75-0.75-0.75H18v-0.75c0-0.41-0.34-0.75-0.75-0.75 s-0.75,0.34-0.75,0.75v0.75h-0.75c-0.41,0-0.75,0.34-0.75,0.75c0,0.41,0.34,0.75,0.75,0.75h0.75v0.75c0,0.41,0.34,0.75,0.75,0.75 S18,18.16,18,17.75V17h0.75C19.16,17,19.5,16.66,19.5,16.25z" />
      </g>
    </svg>
  );
};
