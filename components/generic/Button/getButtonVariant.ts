const variants = {
  primary: 'bg-blue-700 text-indigo-50 font-semibold',
  secondary: 'bg-blue-100 text-blue-800 font-semibold',
  secondaryLight: 'bg-blue-100 text-blue-800 font-normal',
  secondaryGray: 'bg-gray-200 text-gray-800 font-normal',
  plain: 'bg-white text-gray-800 font-semibold border border-gray-200',
};

export type ButtonVariant = keyof typeof variants;

export const getButtonVariant = (variant: ButtonVariant) => variants[variant];
