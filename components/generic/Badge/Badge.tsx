type BadgeProps = {
  textContent: string;
  color: 'amber' | 'blue' | 'green';
};

export const Badge = ({ textContent, color }: BadgeProps) => {
  return (
    <div className={`flex pb-0.5 px-2 bg-${color}-100 rounded-3xl`}>
      <span className={`text-${color}-800 text-xs leading-4 font-normal`}>{textContent}</span>
    </div>
  );
};
