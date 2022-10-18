type RadioProps = {
  name: string;
  label: string;
};

export const Radio = ({ name, label }: RadioProps) => {
  return (
    <label>
      <input name={name} type="radio" />
      <span>{label}</span>
    </label>
  );
};
