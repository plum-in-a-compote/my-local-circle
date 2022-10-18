import { clsx as cx } from 'clsx';

type InputProps = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'tel';
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  pattern?: string;
  unit?: string;
};

export const Input = ({
  name,
  label,
  defaultValue,
  type,
  placeholder,
  required = true,
  minLength,
  pattern,
  unit,
}: InputProps) => {
  const phoneInput = type === 'tel';

  return (
    <label className="relative flex flex-col w-full">
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
            'w-full px-3 py-2 bg-white border-y border-gray-200 placeholder:text-gray-500 text-gray-800 text-xs leading-4 font-normal focus:outline-none focus:ring focus:ring-blue-300 focus:border-gray-200 lg:text-sm lg:leading-5 lg:px-5 lg:py-3',
            !phoneInput && 'border-l rounded-l',
            !unit && 'border-4, rounded-r',
          )}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          type={type}
          required={required}
          minLength={minLength}
          pattern={pattern}
        />
        {unit && (
          <span className="text-xs leading-4 font-normal text-gray-700 px-3 py-2 bg-gray-100 border border-gray-200 rounded-tr rounded-br lg:text-sm lg:leading-5 lg:px-5 lg:py-3">
            {unit}
          </span>
        )}
      </div>
      {!required && (
        <span className="absolute right-0 top-0 text-xs leading-4 font-normal text-gray-600">
          Opcjonalne
        </span>
      )}
    </label>
  );
};
