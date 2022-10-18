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
    <header className="bg-gray-50">
      <Container
        className="py-4 sm:py-5 lg:py-6 sm:flex sm:flex-row-reverse sm:justify-between"
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
            mobileMenuOpened ? 'flex' : 'hidden sm:flex',
            'flex-col gap-1 pt-4 sm:flex-row sm:gap-2 sm:pt-0',
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
