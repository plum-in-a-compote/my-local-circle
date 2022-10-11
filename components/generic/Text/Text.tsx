type TextProps = {
  as?: 'p' | 'span';
  content: string;
};

export const Text = ({ as: As = 'p', content }: TextProps) => {
  return (
    <As className="text-gray-700 text-xs leading-5 font-normal lg:text-base lg:leading-6">
      {content}
    </As>
  );
};
