import { useCallback, useState } from 'react';
import { clsx as cx } from 'clsx';

import { Container } from '../Container/Container';
import { MenuIcon } from '../Icons/MenuIcon';
import { NotificationsIcon } from '../Icons/NotificationsIcon';
import { AccountIcon } from '../Icons/AccountIcon';
import { HeaderLink } from './HeaderLink';
import Link from 'next/link';

export const Header = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const toggleMobileMenu = useCallback(() => setMobileMenuOpened((p) => !p), []);

  return (
    <header
      className={cx(
        'bg-gray-50 border-gray-300 sticky top-0 sm:border-b',
        !mobileMenuOpened && 'border-b',
      )}
    >
      <Container
        className="py-4 sm:py-5 lg:py-6 sm:flex sm:flex-row-reverse sm:justify-between"
        as="nav"
      >
        <div className="w-full flex justify-between items-center sm:w-fit">
          <button
            aria-label="Otwórz menu nawigacyjne strony."
            aria-expanded={mobileMenuOpened}
            className="sm:hidden"
            onClick={toggleMobileMenu}
          >
            <MenuIcon />
          </button>
          <div className="flex gap-3">
            <Link href="/notifications">
              <a
                className="transition group block p-0.5 rounded-full hover:bg-blue-100 focus:bg-blue-100"
                aria-label="Przejdź do strony powiadomień."
              >
                <NotificationsIcon className="transition group-hover:fill-blue-800 group-focus:fill-blue-800" />
              </a>
            </Link>

            <Link href="/account">
              <a
                className="transition group block p-0.5 rounded-full hover:bg-blue-100 focus:bg-blue-100"
                aria-label="Przejdź do ustawień konta."
              >
                <AccountIcon className="transition group-hover:fill-blue-800 group-focus:fill-blue-800" />
              </a>
            </Link>
          </div>
        </div>

        <ul
          className={cx(
            !mobileMenuOpened && 'hidden sm:flex',
            'absolute top-full left-0 right-0 flex flex-col gap-1 px-8 pb-4 bg-gray-50 border-b border-gray-300 sm:border-none sm:static sm:flex-row sm:gap-2 sm:pb-0 sm:px-0',
          )}
        >
          <HeaderLink href="/" content="Strona główna" />
          <HeaderLink href="/community" content="Społeczności" />
          <HeaderLink href="/budgets" content="Budżety" />
        </ul>
      </Container>
    </header>
  );
};
