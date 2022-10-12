import { getHeadingVariant, HeadingVariant } from './getHeadingVariant';
import { clsx as cx } from 'clsx';

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3';
  variant: HeadingVariant;
  content: string;
};

export const Heading = ({ as: As, variant, content }: HeadingProps) => {
  return <As className={cx(getHeadingVariant(variant))}>{content}</As>;
};
