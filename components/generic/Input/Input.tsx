import { clsx as cx } from 'clsx';
import { ChangeEventHandler } from 'react';

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  type: 'text' | 'email' | 'password' | 'tel';
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input = ({ name, label, placeholder, value, type, onChange }: InputProps) => {
  const phoneInput = type === 'tel';

  return (
    <label className="flex flex-col">
      <span className="text-xs leading-4 font-normal text-gray-800 mb-1">{label}</span>
      <div className="flex flex-row w-full">
        {phoneInput && (
          <span className="text-xs leading-4 font-normal text-gray-700 px-3 py-2 bg-gray-100 border border-gray-200 rounded-tl rounded-bl">
            +48
          </span>
        )}
        <input
          className={cx(
            'w-full px-3 py-2 bg-white border-r border-y rounded-r border-gray-200 placeholder:text-gray-600 text-gray-700 text-xs leading-4 font-normal focus:outline-none focus:ring focus:border-blue-100',
            !phoneInput && 'border-l rounded-l',
          )}
          name={name}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
        />
      </div>
    </label>
  );
};
