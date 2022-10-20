import { useCallback, useState } from 'react';
import { clsx as cx } from 'clsx';
import Image from 'next/image';

import { Container } from '../Container/Container';
import { MenuIcon } from '../Icons/MenuIcon';
import { HeaderLink } from './HeaderLink';
import { NavigationIcons } from './NavigationIcons';

// best resolution
import logo from '../../../public/android-chrome-512x512.png';
import {
  DESKTOP_LOGO_HEIGHT,
  DESKTOP_LOGO_WIDTH,
  TABLET_LOGO_HEIGHT,
  TABLET_LOGO_WIDTH,
} from '../../../constants/header';

export const Header = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const toggleMobileMenu = useCallback(() => setMobileMenuOpened((p) => !p), []);

  return (
    <header
      className={cx(
        'z-10 bg-gray-50 border-gray-300 sticky top-0 sm:border-b',
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
          <NavigationIcons />
        </div>

        <div className="sm:flex sm:gap-10 lg:gap-12">
          <div className="w-9 h-9 hidden sm:block lg:hidden">
            <Image src={logo} width={TABLET_LOGO_WIDTH} height={TABLET_LOGO_HEIGHT} alt="" />
          </div>
          <div className="w-12 h-12 hidden lg:block">
            <Image src={logo} width={DESKTOP_LOGO_WIDTH} height={DESKTOP_LOGO_HEIGHT} alt="" />
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
        </div>
      </Container>
    </header>
  );
};
