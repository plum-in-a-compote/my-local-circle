import { ReactNode } from 'react';
import { clsx as cx } from 'clsx';

type CoverImageProps = {
  children: ReactNode;
  className?: string;
};

export const CoverImage = ({ children, className }: CoverImageProps) => {
  return <div className={cx('h-fit border-2 rounded shadow', className)}>{children}</div>;
};
