import { MouseEventHandler } from 'react';
import { FavoriteIcon } from '../Icons/FavoriteIcon';
import { FavoriteFilledIcon } from '../Icons/FavoriteIconFilled';

type VoteButtonProps = {
  label: string;
  type: 'button' | 'submit';
  voted: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const VoteButton = ({ label, type, voted, onClick }: VoteButtonProps) => {
  return (
    <button className="flex items-center gap-1" type={type} onClick={onClick}>
      {voted ? <FavoriteFilledIcon /> : <FavoriteIcon />}
      <span className="text-xs leading-4 font-semibold text-gray-600">{label}</span>
    </button>
  );
};
