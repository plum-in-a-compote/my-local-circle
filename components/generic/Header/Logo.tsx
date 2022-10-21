export const Logo = () => {
  return (
    <div className="hidden sm:block w-9 h-9 sm:w-12 sm:h-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-lg.png"
        alt="Logo projektu My local circle."
        srcSet="/logo-sm.png 36w, /logo.png 48w, /logo-lg.png"
      />
    </div>
  );
};
