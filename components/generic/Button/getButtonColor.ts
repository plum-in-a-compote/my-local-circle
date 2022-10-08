const colorVariants = {
  primary: 'bg-blue-700 text-indigo-50',
  secondary: 'bg-blue-100 text-blue-800',
  secondaryGray: 'bg-gray-200 text-gray-800',
  plain: 'bg-white text-gray-800',
};

export type buttonColor = keyof typeof colorVariants;

export const getButtonColor = (color: buttonColor) => {
  return colorVariants[color];
};
