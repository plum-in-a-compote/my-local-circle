type CheckBoxProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
  description?: string;
};

export const Checkbox = ({ name, label, description, defaultChecked = false }: CheckBoxProps) => {
  return (
    <label className="flex flex-col gap-1.5">
      <div className="flex gap-3">
        <input
          className="w-4 h-4 border border-gray-200 rounded-full focus:ring-blue-300 checked:border-4 checked:border-blue-700 checked:bg-transparent checked:focus:border-blue-700 checked:hover:border-blue-700 checked:hover:bg-transparent checked:focus:bg-transparent"
          type="checkbox"
          defaultChecked={defaultChecked}
          name={name}
        />
        <span className="text-xs leading-4 font-semibold text-gray-700">{label}</span>
      </div>
      {description && (
        <p className="ml-7 text-xs leading-5 font-normal text-gray-700">{description}</p>
      )}
    </label>
  );
};
