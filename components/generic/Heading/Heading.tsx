import { getHeadingSize } from './getHeadingSize';
import { getHeadingWeight } from './getHeadingWeight';
import { clsx as cx } from 'clsx';

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3';
  size: 'sm' | 'base';
  weight: 'bold' | 'semibold' | 'normal';
  textContent: string;
};

export const Heading = ({ as: As, textContent, size, weight }: HeadingProps) => {
  return <As className={cx(getHeadingSize(size), getHeadingWeight(weight))}>{textContent}</As>;
};
