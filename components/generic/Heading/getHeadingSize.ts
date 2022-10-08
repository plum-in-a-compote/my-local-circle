const sizeVariants = {
  sm: 'text-sm leading-5',
  base: 'text-base leading-6',
};

type HeadingSize = keyof typeof sizeVariants;

export const getHeadingSize = (size: HeadingSize) => sizeVariants[size];
