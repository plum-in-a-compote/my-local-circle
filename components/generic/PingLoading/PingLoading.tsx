import { useDisableBodyScroll } from '../../../hooks/useDisableBodyScroll';

type PingLoadingProps = {
  message: string;
};

export const PingLoader = () => {
  return (
    <span aria-hidden={true} className="relative flex w-8 h-8 lg:w-12 lg:h-12">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full w-8 h-8 lg:w-12 lg:h-12 bg-amber-300"></span>
    </span>
  );
};

// Used when redirecting to new screen e.g. creating new budget/community
export const PingLoading = ({ message }: PingLoadingProps) => {
  useDisableBodyScroll();

  return (
    <div
      className="bg-white z-20 w-screen h-screen inset-0 fixed flex flex-col justify-center items-center"
      role="alert"
      aria-live="assertive"
    >
      <div className="flex flex-col gap-1 p-8">
        <div className="flex items-center gap-4 lg:gap-8">
          <PingLoader />
          <h1 className="text-sm font-semibold text-gray-700 sm:text-base lg:text-lg">
            Proszę czekać...
          </h1>
        </div>
        <p className="pl-12 lg:pl-20 text-gray-700 text-xs leading-5 font-normal sm:max-w-xs sm:text-sm sm:leading-6 lg:max-w-md lg:text-base lg:leading-7">
          {message}
        </p>
      </div>
    </div>
  );
};
