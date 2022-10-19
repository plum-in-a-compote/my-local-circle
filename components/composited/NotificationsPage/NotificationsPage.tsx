import { Fragment, MouseEventHandler } from 'react';
import { Heading } from '../../generic/Heading/Heading';
import { LinkButton } from '../../generic/LinkButton/LinkButton';
import { NotificationList } from './NotificationList';

export const NotificationsPage = () => {
  // Placeholder function
  const handleLoadMore: MouseEventHandler<HTMLButtonElement> = () => 1;

  return (
    <Fragment>
      <section className="sm:grid sm:grid-cols-2">
        <Heading
          className="mb-3 sm:mb-8"
          as="h1"
          variant="base"
          content="Powiadomienia"
          displayDecorationBorder={true}
        />
        {/* Map over props to render notifications */}
        {/* MOCKED DATA */}
        <NotificationList
          notifications={[
            {
              id: 1,
              title: 'Test',
              communityName: 'Moja szkola',
              notificationType: 'applicationAccepted',
            },
            {
              id: 2,
              title: 'Testtest',
              communityName: 'Twoja szkola',
              notificationType: 'newApplication',
            },
            {
              id: 3,
              title: 'Testtesttest',
              communityName: 'Moja szkola jeden',
              notificationType: 'newProject',
            },
          ]}
        />
        <LinkButton
          className="mt-8 sm:col-end-2 sm:mt-10 lg:mt-20"
          textContent="Wczytaj więcej..."
          onClick={handleLoadMore}
        />
      </section>
      <section>{/* Preferences */}</section>
    </Fragment>
  );
};
