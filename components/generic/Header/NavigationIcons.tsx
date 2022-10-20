import Link from 'next/link';
import { AccountIcon } from '../Icons/AccountIcon';
import { NotificationsIcon } from '../Icons/NotificationsIcon';

export const NavigationIcons = () => {
  return (
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
  );
};
