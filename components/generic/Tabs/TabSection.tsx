type TabSectionProps<T extends string> = {
  value: T;
  content: React.ReactNode;
};

export const TabSection = <T extends string>({ value, content }: TabSectionProps<T>) => {
  return (
    <section className="target:" id={value}>
      {content}
    </section>
  );
};
