const sizeVariants = {
  mobile: 'px-4 py-2 text-xs leading-4',
  tablet: 'px-8 py-2 text-sm leading-5',
  desktop: 'px-24 py-3 text-base leading-6',
};

export type ButtonSize = keyof typeof sizeVariants;

export const getButtonSize = (size: ButtonSize) => sizeVariants[size];
