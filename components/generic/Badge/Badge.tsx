type BadgeProps = {
  textContent: string;
  color: 'amber' | 'blue' | 'green';
};

export const Badge = ({ textContent, color }: BadgeProps) => {
  return (
    <span
      // Padding like this, because py-0.5 makes it look not centered
      className={`pt-0.5 pb-1 px-2 bg-${color}-100 text-${color}-800 text-xs leading-4 font-normal rounded-3xl`}
    >
      {textContent}
    </span>
  );
};
