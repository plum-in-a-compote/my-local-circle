type TextAreaProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

export const TextArea = ({ name, label, placeholder, required = true }: TextAreaProps) => {
  return (
    <label className="relative flex flex-col w-full">
      <span className="mb-1 text-xs leading-4 font-normal text-gray-800 lg:text-sm lg:leading-5 lg:mb-2">
        {label}
      </span>
      <textarea
        className="h-32 w-full px-2.5 py-2 bg-white border-r border-y rounded-r border-gray-200 placeholder:text-gray-500 text-gray-800 text-xs leading-4 font-normal focus:outline-none focus:ring focus:ring-blue-300 focus:border-gray-200 lg:text-sm lg:leading-5 lg:px-5 lg:py-3 border-l rounded-l"
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
};
