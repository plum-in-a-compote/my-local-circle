const variants = {
  xs: 'text-xs leading-5 font-normal',
  base: 'text-base leading-6 font-normal',
};

export type TextVariant = keyof typeof variants;

export const getTextVariant = (variant: TextVariant) => variants[variant];
