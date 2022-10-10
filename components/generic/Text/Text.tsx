import { clsx as cx } from 'clsx';
import { getTextVariant, TextVariant } from './getTextVariant';

type TextProps = {
  as: 'p' | 'span';
  variant: TextVariant;
  textContent: string;
};

export const Text = ({ as: As, variant, textContent }: TextProps) => {
  return <As className={cx('text-gray-700', getTextVariant(variant))}>{textContent}</As>;
};
