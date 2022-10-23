import { formatCurrency } from '../../../utils/currency';
import { CommunityStat } from './CommunityStat';

type CommunityStatsProps = {
  city: string;
  projectsNo: number;
  usersNo: number;
  budgetsNo: number;
  averageBudgetAmount: number;
  address: string;
};

export const CommunityStats = ({
  city,
  projectsNo,
  usersNo,
  budgetsNo,
  averageBudgetAmount,
  address,
}: CommunityStatsProps) => {
  return (
    <ul className="flex flex-col gap-3 mb-8 sm:grid sm:grid-cols-2 sm:col-span-2">
      <li>
        <CommunityStat name="Miasto" value={city} />
      </li>
      <li>
        <CommunityStat name="Dokładny adres" value={address} />
      </li>
      <li>
        <CommunityStat name="Użytkownicy" value={usersNo.toString()} />
      </li>
      <li>
        <CommunityStat name="Projekty" value={projectsNo.toString()} />
      </li>
      <li>
        <CommunityStat name="Budżety" value={budgetsNo.toString()} />
      </li>
      <li>
        <CommunityStat
          name="Średnia wielkość budżetu"
          value={formatCurrency(averageBudgetAmount)}
        />
      </li>
    </ul>
  );
};
