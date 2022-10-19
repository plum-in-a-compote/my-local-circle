import { MouseEventHandler } from 'react';
import { Heading } from '../../generic/Heading/Heading';
import { LinkButton } from '../../generic/LinkButton/LinkButton';
import { NotificationList } from './NotificationList';

export const NotificationsPage = () => {
  // Placeholder function
  const handleLoadMore: MouseEventHandler<HTMLButtonElement> = () => 1;

  return (
    <section className="sm:grid sm:grid-cols-2">
      <Heading
        className="mb-3 sm:mb-8"
        as="h1"
        variant="base"
        content="Powiadomienia"
        displayDecorationBorder={true}
      />
      {/* Map over props to render notifications, mocked for now */}
      {/* <NotificationList notifications={[{
        id: 1,
        title: "Test",
        description: ''
      }]} /> */}
      <LinkButton
        className="mt-8 sm:col-end-2 sm:mt-10 lg:mt-20"
        textContent="Wczytaj więcej..."
        onClick={handleLoadMore}
      />
    </section>
  );
};
