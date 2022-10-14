import { clsx as cx } from 'clsx';

type TextProps = {
  as?: 'p' | 'span';
  content: string;
  className?: string;
};

export const Text = ({ as: As = 'p', content, className }: TextProps) => {
  return (
    <As
      className={cx(
        'text-gray-700 text-xs leading-5 font-normal lg:text-base lg:leading-6',
        className,
      )}
    >
      {content}
    </As>
  );
};
