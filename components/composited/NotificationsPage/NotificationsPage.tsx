import { Fragment, MouseEventHandler } from 'react';
import { Heading } from '../../generic/Heading/Heading';
import { LinkButton } from '../../generic/LinkButton/LinkButton';
import { WarningMessage } from '../../generic/WarningMessage/WarningMessage';
import { PreferencesForm } from '../PreferencesForm/PreferencesForm';
import { NotificationList } from './NotificationList';

export const NotificationsPage = () => {
  // Placeholder function
  const handleLoadMore: MouseEventHandler<HTMLButtonElement> = () => 1;

  return (
    <Fragment>
      <section className="mb-16 sm:grid sm:grid-cols-2">
        <div>
          <Heading
            className="mb-4"
            as="h1"
            variant="base"
            content="Powiadomienia"
            displayDecorationBorder={true}
          />
          <WarningMessage
            className="mb-3 sm:mb-8"
            title="Wsparcie wkrótce!"
            description="Ta strona nie jest obecnie funkcjonalna, a przedstawione dane są poglądowe."
          />
        </div>
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
          className="mt-4 sm:col-end-2 sm:mt-10 lg:mt-20"
          textContent="Wczytaj więcej..."
          underline={true}
          onClick={handleLoadMore}
        />
      </section>
      <section>
        <Heading className="mb-6 text-gray-700" as="h1" variant="smBold" content="Personalizacja" />
        <PreferencesForm
          preferences={{
            applicationAccepted: true,
            newApplication: false,
            newProject: true,
            projectVotingComplete: false,
          }}
        />
      </section>
    </Fragment>
  );
};
