import { ChangeEventHandler } from 'react';

type CheckBoxProps = {
  name: string;
  label: string;
  description?: string;
  isChecked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const CheckBox = ({ name, label, description, isChecked, onChange }: CheckBoxProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex gap-3">
        {/* How do we want the checked box to look? */}
        <input
          className="w-4 h-4 bg-white border border-gray-200 rounded"
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={onChange}
        />
        <span className="text-xs leading-4 font-semibold text-gray-700">{label}</span>
      </label>
      {description && (
        <p className="ml-7 text-xs leading-5 font-normal text-gray-700">{description}</p>
      )}
    </div>
  );
};
