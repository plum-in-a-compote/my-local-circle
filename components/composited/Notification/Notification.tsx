import Link from 'next/link';
import { Fragment } from 'react';
import { Badge } from '../../generic/Badge/Badge';
import { LinkButton } from '../../generic/LinkButton/LinkButton';
import { Text } from '../../generic/Text/Text';
import { getNotificationContents, NotificationType } from './getNotificationContents';

type NotificationProps = {
  notificationType: NotificationType;
  groupName: string;
  isNew?: boolean;
};

// groupName will prob have different format in db, such as group-name, but for now we assume the format is Group Name
export const Notification = ({ notificationType, groupName, isNew = false }: NotificationProps) => {
  const [name, descPart1, descPart2] = getNotificationContents(notificationType);

  return (
    <Fragment>
      <div className="flex mb-2.5">
        <span className="pr-3 text-xs leading-4 font-semibold">{name}</span>
        {isNew && <Badge textContent="Nowe" color="amber" />}
      </div>
      <div>
        <Text as="span" content={descPart1} />
        <Link href={`/communities/${groupName}`}>
          <LinkButton textContent={groupName} />
        </Link>
        <Text as="span" content={descPart2} />
      </div>
    </Fragment>
  );
};
