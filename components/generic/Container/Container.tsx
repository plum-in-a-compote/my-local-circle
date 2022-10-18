import { clsx as cx } from 'clsx';

type ContainerProps = {
  as: 'main' | 'section' | 'article' | 'div' | 'nav';
  className?: string;
  children: React.ReactNode;
};
export const Container = ({ as: As, className, children }: ContainerProps) => {
  return (
    <As
      className={cx(
        'w-full max-w-sm mx-auto px-8 sm:max-w-3xl sm:px-16 lg:max-w-screen-2xl lg:px-40',
        className,
      )}
    >
      {children}
    </As>
  );
};
