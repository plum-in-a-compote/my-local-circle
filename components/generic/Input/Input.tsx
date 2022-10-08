import { clsx as cx } from 'clsx';

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'password' | 'tel';
  // no onChange and value, because we might use FormData
};

export const Input = ({ name, label, placeholder, type }: InputProps) => {
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
            'w-full px-3 py-2 bg-white border-r border-y rounded-r border-gray-200 placeholder:text-gray-600 text-gray-700 text-xs leading-4 font-normal',
            !phoneInput && 'border-l rounded-l',
          )}
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </label>
  );
};
