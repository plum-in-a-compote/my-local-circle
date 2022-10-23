import { useMutation } from '@tanstack/react-query';
import { useCommunityJoinRequests } from '../../../hooks/useCommunityJoinRequests';
import { acceptMember } from '../../../lib/post/acceptMember';
import { CommunityJoinRequest } from '../../../validators/CommunityJoinRequest';
import { TextButton } from '../../generic/TextButton/TextButton';

type AdminPanelProps = {
  communityId: number;
};

export const AdminPanel = ({ communityId }: AdminPanelProps) => {
  const { data: joinRequests } = useCommunityJoinRequests(communityId);

  return (
    <ul className="flex flex-col list-disc">
      {joinRequests?.map((fields) => (
        <JoinRequestItem key={fields.userId} {...fields} />
      ))}
    </ul>
  );
};

type JoinRequestItemProps = CommunityJoinRequest;
export const JoinRequestItem = ({ userId, communityId, email, name }: JoinRequestItemProps) => {
  const accept = useMutation(acceptMember);
  const handleAcceptRequest = () => {
    accept.mutate({ userId, communityId, email, name });
  };
  return (
    <li className="px-3 py-4 flex flex-row  items-center gap-8">
      {/*  eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
      <span className="text-gray-700 text-sm sm:text-base leading-4 font-normal">
        <span className="font-semibold">{name}</span> {email}
      </span>
      <TextButton content="Zaakceptuj" onClick={handleAcceptRequest} />
      {accept.isLoading && (
        <span className="text-gray-700 text-sm sm:text-base leading-4 font-normal">
          Ładowanie..
        </span>
      )}
    </li>
  );
};
