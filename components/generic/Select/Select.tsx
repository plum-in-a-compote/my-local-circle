import { ChangeEventHandler } from 'react';
import { UnfoldMoreIcon } from '../Icons/UnfoldMoreIcon';

type Option = {
  name: string;
  value: string;
};

type SelectProps = {
  name: string;
  label: string;
  value: string;
  options: Option[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export const Select = ({ name, label, value, options, onChange }: SelectProps) => {
  return (
    <label className="flex flex-col">
      <span className="text-xs leading-4 font-normal text-gray-800 mb-2">{label}</span>
      <div className="relative flex items-center">
        <select
          className="w-full px-2 py-2 bg-white border rounded border-gray-200 placeholder:text-gray-600 text-gray-700 text-xs leading-4 font-normal appearance-none"
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.value}
            </option>
          ))}
        </select>
        <UnfoldMoreIcon className="absolute right-2" width={24} height={24} />
      </div>
    </label>
  );
};
