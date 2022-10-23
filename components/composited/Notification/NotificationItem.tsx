import Link from 'next/link';
import { Fragment } from 'react';
import { Badge } from '../../generic/Badge/Badge';
import { LinkButton } from '../../generic/LinkButton/LinkButton';
import { Text } from '../../generic/Text/Text';
import {
  getNotificationTitle,
  getNotificationDescription,
  NotificationType,
} from './getNotificationContents';

type NotificationItemProps = {
  notificationType: NotificationType;
  communityName: string;
  isNew?: boolean;
};

export const NotificationItem = ({
  notificationType,
  communityName,
  isNew = false,
}: NotificationItemProps) => {
  const title = getNotificationTitle(notificationType);
  const [descPart1, descPart2] = getNotificationDescription(notificationType);

  return (
    <Fragment>
      <div className="flex items-center mb-2 lg:mb-3">
        <span className="pr-3 text-xs text-gray-800 leading-4 font-semibold sm:text-sm sm:leading-4 lg:leading-5 lg:text-lg">
          {title}
        </span>
        {isNew && <Badge textContent="Nowe" color="amber" />}
      </div>
      <div>
        <Text className="sm:text-sm" as="span" content={descPart1} />
        <Link href={`/communities/${communityName}`}>
          <LinkButton textContent={communityName} />
        </Link>
        <Text className="sm:text-sm" as="span" content={descPart2} />
      </div>
    </Fragment>
  );
};
