type TabSectionProps<T extends string> = {
  value: T;
  children: React.ReactNode;
};

export const TabSection = <T extends string>({ value, children }: TabSectionProps<T>) => {
  return (
    <section className="hidden target:block" id={value}>
      {children}
    </section>
  );
};
