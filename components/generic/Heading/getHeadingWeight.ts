const weightVariants = {
  normal: 'font-normal text-gray-700',
  semibold: 'font-semibold text-gray-700',
  bold: 'font-bold text-gray-800',
};

type HeadingWeight = keyof typeof weightVariants;

export const getHeadingWeight = (size: HeadingWeight) => weightVariants[size];
