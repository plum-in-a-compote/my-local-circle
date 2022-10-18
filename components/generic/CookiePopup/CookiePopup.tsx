import { useCallback } from 'react';
import { useStorage } from '../../../hooks/useStorage';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { Heading } from '../Heading/Heading';
import { CookieIcon } from '../Icons/CookieIcon';

export const CookiePopup = () => {
  const [val, setStorageVal] = useStorage<'accepted' | 'not-accepted'>('cookies', 'not-accepted');
  const handleCookiesAccepted = useCallback(() => {
    setStorageVal('accepted');
  }, [setStorageVal]);

  return (
    <dialog
      open={val === 'not-accepted'}
      className="backdrop:bg-gray-400 fixed top-32 sm:top-40 lg:top-56 w-full mx-auto max-w-sm sm:max-w-3xl lg:max-w-screen-2xl px-6 sm:px-16 lg:px-40"
    >
      <div className="p-6 rounded bg-blue-50">
        <div className="flex items-start gap-2 mb-2">
          <CookieIcon className="fill-blue-800" />
          <Heading className="text-blue-800" as="h2" variant="base" content="Ciasteczka" />
        </div>
        <p className="text-gray-700 text-xs leading-5 font-normal lg:text-base lg:leading-6 pl-8 mb-8 lg:mb-12">
          Wykorzystujemy ciasteczka do zapisywania preferencji użytkownika. Używamy także{' '}
          <code>window.localStorage</code> do utrzymania sesji.
        </p>
        <Button
          className="ml-8"
          onClick={handleCookiesAccepted}
          variant="primary"
          content="W porządku!"
        />
      </div>
    </dialog>
  );
};
