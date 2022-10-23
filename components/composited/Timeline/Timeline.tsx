import { Heading } from '../../generic/Heading/Heading';
import { TimelineItem } from './TimelineItem';

export type TimelineItemFields = {
  coordinatorName: string;
  projectName: string;
  eventType: 'accepted' | 'finished' | 'new';
};

type TimelineProps = {
  items: TimelineItemFields[];
};

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <section>
      <Heading
        className="mb-5"
        content="Linia czasu"
        as="h2"
        variant="base"
        displayDecorationBorder={true}
      />
      <ul className="">
        {items.map((item) => (
          <li className="relative px-3" key={`${item.coordinatorName}/${item.projectName}`}>
            <TimelineItem
              coordinatorName={item.coordinatorName}
              projectName={item.projectName}
              eventType={item.eventType}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
