import { MouseEventHandler } from 'react';
import { Auth } from '../../generic/Auth/Auth';
import { Heading } from '../../generic/Heading/Heading';
import { LinkButton } from '../../generic/LinkButton/LinkButton';
import { Notification } from '../Notification/Notification';

export const NotificationsPage = () => {
  // Placeholder function
  const handleLoadMore: MouseEventHandler<HTMLButtonElement> = () => 1;

  return (
    <Auth>
      <Heading
        className="mb-3"
        as="h1"
        variant="base"
        content="Powiadomienia"
        displayDecorationBorder={true}
      />
      {/* Map over props to render notifications, mocked for now */}
      <ul className="list-none">
        <li className="py-2">
          <Notification
            notificationType="applicationAccepted"
            groupName="Szkolny klub sportowy"
            isNew={true}
          />
        </li>
        <li className="py-2">
          <Notification
            notificationType="newApplication"
            groupName="Szkolny klub sportowy"
            isNew={true}
          />
        </li>
        <li className="py-2">
          <Notification
            notificationType="newProject"
            groupName="Szkolny klub sportowy"
            isNew={true}
          />
        </li>
      </ul>
      <LinkButton className="mt-8" textContent="Wczytaj więcej..." onClick={handleLoadMore} />
    </Auth>
  );
};
