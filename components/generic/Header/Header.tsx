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
    <header className="bg-gray-50">
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
            <Link aria-label="Przejdź do strony powiadomień." href="/account">
              <a>
                <NotificationsIcon />
              </a>
            </Link>

            <Link aria-label="Przejdź do ustawień konta." href="/notifications">
              <a>
                <AccountIcon />
              </a>
            </Link>
          </div>
        </div>

        <ul
          className={cx(
            mobileMenuOpened ? 'flex' : 'hidden sm:flex',
            'flex-col gap-1 pt-4 sm:flex-row sm:gap-2 sm:pt-0',
          )}
        >
          <HeaderLink href="/" content="Strona główna" />
          <HeaderLink href="/communities" content="Społeczności" />
          <HeaderLink href="/budgets" content="Budżety" />
        </ul>
      </Container>
    </header>
  );
};
