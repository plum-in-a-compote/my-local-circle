type TextProps = {
  as: 'p' | 'span';
  textContent: string;
};

export const Text = ({ as: As, textContent }: TextProps) => {
  return <As className="text-xs leading-5 font-normal text-gray-700">{textContent}</As>;
};
