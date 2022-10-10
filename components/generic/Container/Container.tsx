import { clsx as cx } from 'clsx';

type ContainerProps = {
  as: 'main' | 'section' | 'article' | 'div';
  className?: string;
  children: React.ReactNode;
};
export const Container = ({ as: As, className, children }: ContainerProps) => {
  return (
    <As
      className={cx(
        'w-full max-w-sm mx-auto px-8 py-10 sm:max-w-xl sm:px-16 sm:py-12 xl:max-w-6xl xl:px-40 xl:py-16',
        className,
      )}
    >
      {children}
    </As>
  );
};
