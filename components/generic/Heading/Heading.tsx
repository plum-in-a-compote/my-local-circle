import { clsx as cx } from 'clsx';

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3';
  variant: keyof typeof variants;
  content: string;
  bottomBorder?: boolean;
  className?: string;
};

const variants = {
  smSemiBold: 'text-sm leading-5 font-semibold text-gray-700',
  smBold:
    'text-sm leading-5 font-bold text-gray-700 sm:text-base sm:leading-6 sm:text-gray-800 lg:text-lg lg:leading-7',
  base: 'text-base leading-6 font-bold text-gray-800 sm:text-lg sm:leading-7 lg:text-2xl lg:leading-8',
};

export const Heading = ({
  as: As,
  variant,
  content,
  bottomBorder = false,
  className,
}: HeadingProps) => {
  return (
    <As
      className={cx(
        variants[variant],
        bottomBorder && 'pb-4 border-b border-dashed border-gray-400',
        className,
      )}
    >
      {content}
    </As>
  );
};
