import { useCallback, useEffect, useRef } from 'react';
import { useStorage } from '../../../hooks/useStorage';
import { Button } from '../Button/Button';
import { CookieIcon } from '../Icons/CookieIcon';
import { LargeCookieIcon } from '../Icons/LargeCookieIcon';

export const CookiePopup = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [val, setStorageVal] = useStorage<'accepted' | 'not-accepted'>('cookies', 'not-accepted');

  const handleCookiesAccepted = useCallback(() => {
    setStorageVal('accepted');
  }, [setStorageVal]);

  useEffect(() => {
    const hasOpenAttribute = dialogRef.current?.open;
    const shouldOpen = val === 'not-accepted';
    if (!hasOpenAttribute && shouldOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [val]);

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-opacity-70 backdrop:bg-gray-500 bg-transparent w-full mx-auto max-w-sm sm:max-w-3xl px-6 sm:px-16"
    >
      <div className="shadow-lg p-6 rounded bg-blue-50 lg:rounded-lg">
        <div className="flex items-center gap-2 mb-2 lg:gap-4">
          <CookieIcon className="fill-blue-500 lg:hidden" />
          <LargeCookieIcon className="fill-blue-500 hidden lg:block" />
          <h2 className="text-base leading-6 font-bold text-gray-800 sm:text-lg sm:leading-7 lg:text-3xl lg:leading-10">
            Ciasteczka
          </h2>
        </div>
        <p className="text-gray-700 text-xs leading-5 font-normal sm:text-sm sm:leading-6 lg:text-xl lg:leading-8 pl-8 lg:pl-16 mb-8 lg:mb-12">
          Wykorzystujemy ciasteczka do zapisywania preferencji użytkownika. Pozwala to na lepsze
          działanie aplikacji oraz ułatwienie z niej korzystania. Miłego dnia!
        </p>
        <Button
          className="ml-8 lg:ml-16"
          onClick={handleCookiesAccepted}
          variant="primary"
          content="W porządku!"
        />
      </div>
    </dialog>
  );
};
