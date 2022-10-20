import { FormEventHandler, Fragment, useCallback, useState } from 'react';
import { Badge } from '../../generic/Badge/Badge';
import { Heading } from '../../generic/Heading/Heading';
import { ExpandLessIcon } from '../../generic/Icons/ExpandLessIcon';
import { ExpandMoreIcon } from '../../generic/Icons/ExpandMoreIcon';
import { Text } from '../../generic/Text/Text';
import { TextButton } from '../../generic/TextButton/TextButton';
import { VoteButton } from '../../generic/VoteButton/VoteButton';
import { ProjectInfoList } from './ProjectInfoList';

type ProjectCardFields = {
  title: string;
  description: string;
  estimatedCost: string;
  estimatedRealizationDate: string;
  place: string;
  voted: boolean;
};

type ProjectCardProps = {
  fields: ProjectCardFields;
};

export const ProjectCard = ({ fields }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = useCallback(() => setExpanded((p) => !p), []);
  const [voted, setVoted] = useState(fields.voted);

  const handleVote: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // @todo Skczu (I hope) When user clicks, set state to true, send POST, if error - display error & set state to false
    setVoted((prev) => !prev);
  };

  return (
    <article>
      <div className="flex items-center gap-3 mb-3">
        <Heading content={fields.title} as="h2" variant="baseSemibold" />
        {fields.voted && <Badge color="amber" textContent="Wspierasz" />}
      </div>
      {expanded ? (
        <Fragment>
          <Text className="mb-6 whitespace-pre-wrap w-11/12" as="p" content={fields.description} />
          <ProjectInfoList
            items={[
              {
                label: 'Przewidywany koszt',
                value: fields.estimatedCost,
              },
              {
                label: 'Data realizacji',
                value: fields.estimatedRealizationDate,
              },
              {
                label: 'Miejsce',
                value: fields.place,
              },
            ]}
          />
          <div className="flex justify-between items-center mt-3">
            <form onSubmit={handleVote}>
              <VoteButton label="Wspieram inicjatywę" type="submit" voted={voted} />
            </form>
            <button onClick={toggleExpanded}>
              <ExpandLessIcon width={32} height={32} className="fill-blue-800" />
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Text
            className="mb-6 whitespace-pre-wrap w-11/12"
            as="p"
            content={fields.description.slice(0, 120) + '...'}
          />
          <button className="flex items-center gap-2" onClick={toggleExpanded}>
            <span className="w-fit text-xs leading-4 font-semibold text-blue-800 sm:leading-5 sm:text-sm lg:text-base lg:leading-6 focus:text-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              Rozwiń szczegółowy opis
            </span>
            <ExpandMoreIcon className="fill-blue-800" />
          </button>
        </Fragment>
      )}
    </article>
  );
};