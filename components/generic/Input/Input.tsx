import { clsx as cx } from 'clsx';
import { ChangeEventHandler } from 'react';

type InputProps = {
  name: string;
  label: string;
  tag?: string;
  placeholder?: string;
  value: string;
  type: 'text' | 'email' | 'password' | 'tel';
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input = ({ name, label, tag, placeholder, value, type, onChange }: InputProps) => {
  const phoneInput = type === 'tel';

  return (
    <label className="relative flex flex-col">
      <span className="mb-1 text-xs leading-4 font-normal text-gray-800 lg:text-sm lg:leading-5 lg:mb-2">
        {label}
      </span>
      <div className="flex flex-row w-full">
        {phoneInput && (
          <span className="text-xs leading-4 font-normal text-gray-700 px-3 py-2 bg-gray-100 border border-gray-200 rounded-tl rounded-bl lg:text-sm lg:leading-5 lg:px-5 lg:py-3">
            +48
          </span>
        )}
        <input
          className={cx(
            'w-full px-3 py-2 bg-white border-r border-y rounded-r border-gray-200 placeholder:text-gray-500 text-gray-800 text-xs leading-4 font-normal focus:outline-none focus:ring focus:ring-blue-300 lg:text-sm lg:leading-5 lg:px-5 lg:py-3',
            !phoneInput && 'border-l rounded-l',
          )}
          name={name}
          placeholder={placeholder}
          value={value}
          type={type}
          maxLength={phoneInput ? 11 : undefined}
          onChange={onChange}
        />
      </div>
      {tag && (
        <span className="absolute right-0 top-0 text-xs leading-4 font-normal text-gray-600">
          {tag}
        </span>
      )}
    </label>
  );
};
