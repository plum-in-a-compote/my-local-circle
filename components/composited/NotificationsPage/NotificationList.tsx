import { Notification } from '../../../validators/Notification';
import { NotificationItem } from '../Notification/NotificationItem';

type NotificationListProps = {
  // Placeholder type
  notifications: Notification[];
};

export const NotificationList = ({ notifications }: NotificationListProps) => {
  return (
    <ul className="list-none flex flex-col gap-6 sm:col-end-2 sm:gap-8 lg:gap-12">
      {notifications.map((notification) => (
        <li key={notification.id}>
          <NotificationItem
            notificationType={notification.notificationType}
            // fix naming in getFunc
            groupName={notification.communityName}
            isNew={true}
          />
        </li>
      ))}
    </ul>
  );
};
