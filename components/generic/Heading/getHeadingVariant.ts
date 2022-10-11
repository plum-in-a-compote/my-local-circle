const variants = {
  smSemiBold: 'text-sm leading-5 font-semibold text-gray-700',
  smBold: 'text-sm leading-5 font-bold text-gray-700 sm:text-base sm:leading-6 sm:text-gray-800',
  base: 'text-base leading-6 font-bold text-gray-800 sm:text-lg sm:leading-7',
};

export type HeadingVariant = keyof typeof variants;

export const getHeadingVariant = (variant: HeadingVariant) => variants[variant];
