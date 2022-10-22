import { clsx as cx } from 'clsx';
import { ChangeEventHandler } from 'react';
import { Text } from '../Text/Text';

type RadioProps = {
  name: string;
  label: string;
  description: string;
  checked: boolean;
  value: string;
  className?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Radio = ({
  name,
  label,
  description,
  checked,
  value,
  className,
  onChange,
}: RadioProps) => {
  return (
    <label className={cx('block px-2 py-3 border-gray-300', checked && 'bg-blue-50', className)}>
      <div className="flex gap-3.5 mb-2 items-center">
        <input
          className="w-3.5 h-3.5 lg:w-4 lg:h-4 border-4 border-gray-200 rounded-full focus:ring-blue-300 checked:text-blue-800 checked:border-blue-700 checked:bg-transparent checked:focus:border-blue-700 checked:focus:bg-transparent hover:checked:border-blue-700 hover:checked:bg-transparent"
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span
          className={cx(
            'text-xs font-semibold leading-5 lg:text-base lg:leading-6',
            !checked && 'text-gray-800',
            checked && 'text-blue-800',
          )}
        >
          {label}
        </span>
      </div>
      <Text className={cx('ml-7', checked && 'text-blue-700')} content={description} />
    </label>
  );
};
