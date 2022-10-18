import { useCallback, useState } from 'react';
import { clsx as cx } from 'clsx';

import { Container } from '../Container/Container';
import { MenuIcon } from '../Icons/MenuIcon';
import { NotificationsIcon } from '../Icons/NotificationsIcon';
import { AccountIcon } from '../Icons/AccountIcon';
import { HeaderLink } from './HeaderLink';

export const Header = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const toggleMobileMenu = useCallback(() => setMobileMenuOpened((p) => !p), []);

  return (
    <header className="bg-gray-50 sticky top-0">
      <Container
        className="relative py-4 sm:py-5 lg:py-6 sm:flex sm:flex-row-reverse sm:justify-between"
        as="nav"
      >
        <div className="w-full flex justify-between items-center sm:w-fit">
          <button className="sm:hidden" onClick={toggleMobileMenu}>
            <MenuIcon />
            <span className="sr-only">Otwórz menu nawigacyjne strony.</span>
          </button>
          <div className="flex gap-3">
            <NotificationsIcon className="lg:w-8 lg:h-8" />
            <AccountIcon className="lg:w-8 lg:h-8" />
          </div>
        </div>

        <ul
          className={cx(
            mobileMenuOpened && 'hidden sm:flex',
            'absolute top-full left-0 right-0 flex flex-col gap-1 px-8 pb-4 bg-gray-50 border-b border-gray-300 sm:border-none sm:static sm:flex-row sm:gap-2 sm:pb-0 sm:px-0',
          )}
        >
          <HeaderLink href="/" content="Indeks" />
          <HeaderLink href="#" content="Twoje społeczności" />
          <HeaderLink href="#" content="Budżety lokalne" />
        </ul>
      </Container>
    </header>
  );
};
