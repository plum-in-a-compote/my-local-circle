import { UnfoldMoreIcon } from '../Icons/UnfoldMoreIcon';

type Option = {
  name: string;
  value: string;
};

type SelectProps = {
  name: string;
  label: string;
  options: Option[];
};

export const Select = ({ name, label, options }: SelectProps) => {
  return (
    <label className="flex flex-col">
      <span className="text-xs leading-4 font-normal text-gray-800 mb-1">{label}</span>
      <div className="relative">
        <select
          className="w-full px-2 py-2 bg-white border rounded border-gray-200 placeholder:text-gray-600 text-gray-700 text-xs leading-4 font-normal appearance-none"
          name={name}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.value}
            </option>
          ))}
        </select>
        <UnfoldMoreIcon className="absolute right-2 bottom-1.5" width={22} height={22} />
      </div>
    </label>
  );
};
