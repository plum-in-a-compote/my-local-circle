import { FormEventHandler, Fragment, useCallback, useState } from 'react';
import { clsx as cx } from 'clsx';
import { Badge } from '../../generic/Badge/Badge';
import { Heading } from '../../generic/Heading/Heading';
import { ExpandLessIcon } from '../../generic/Icons/ExpandLessIcon';
import { ExpandMoreIcon } from '../../generic/Icons/ExpandMoreIcon';
import { Text } from '../../generic/Text/Text';
import { VoteButton } from '../../generic/VoteButton/VoteButton';
import { ProjectInfoList } from './ProjectInfoList';
import { Project } from '../../../validators/Project';
import { useUserVoted } from '../../../hooks/useProjectUpvotes';
import { formatCurrency } from '../../../utils/currency';
import { useVoteProject } from '../../../hooks/useVoteProject';
import { useUser } from '../../../hooks/useUser';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const { data: user } = useUser();
  const { data: voted } = useUserVoted(project.id as number);
  const vote = useVoteProject(project.id as number);

  const toggleExpanded = useCallback(() => setExpanded((p) => !p), []);

  const handleUserVote: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const userId = user?.id;
    if (!vote.isLoading && userId) {
      vote.mutate({ userId, like: !voted });
    }
  };

  return (
    <article>
      <div className="flex items-center gap-3 mb-3">
        <Heading content={project.title} as="h2" variant="baseSemibold" />
        {voted && <Badge color="amber" textContent="Wspierasz" />}
      </div>
      <Text
        className={cx('mb-6 whitespace-pre-wrap w-11/12', !expanded && 'line-clamp-2 mb-2')}
        as="p"
        content={project.description}
      />
      {expanded ? (
        <Fragment>
          <ProjectInfoList
            items={[
              {
                label: 'Przewidywany koszt',
                value: formatCurrency(project.estimatedCost),
              },
              {
                label: 'Data realizacji',
                value: new Date(project.estimatedRealisationDate).toLocaleDateString(),
              },
              {
                label: 'Miejsce',
                value: project.place,
              },
            ]}
          />
          <div className="flex justify-between items-center mt-3">
            <form onSubmit={handleUserVote}>
              <VoteButton
                disabled={vote.isLoading}
                label="Wspieram inicjatywę"
                type="submit"
                voted={Boolean(voted)}
              />
            </form>
            <button onClick={toggleExpanded}>
              <ExpandLessIcon width={32} height={32} className="fill-blue-800" />
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
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
