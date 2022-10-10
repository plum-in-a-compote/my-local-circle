import { getHeadingVariant, HeadingVariant } from './getHeadingVariant';
import { clsx as cx } from 'clsx';

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3';
  variant: HeadingVariant;
  textContent: string;
};

export const Heading = ({ as: As, variant, textContent }: HeadingProps) => {
  return <As className={cx(getHeadingVariant(variant))}>{textContent}</As>;
};
