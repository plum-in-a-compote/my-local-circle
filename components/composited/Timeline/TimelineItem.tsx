import { Fragment } from 'react';
import { AddIcon } from '../../generic/Icons/AddIcon';
import { CheckIcon } from '../../generic/Icons/CheckIcon';
import { TaskDoneIcon } from '../../generic/Icons/TaskDoneIcon';
import { TimelineItemFields } from './Timeline';

const contents = {
  accepted: ' zaakceptował projekt ',
  new: ' dodał projekt ',
};

export const TimelineItem = ({ coordinatorName, projectName, eventType }: TimelineItemFields) => {
  return (
    <div className="border-l-2 border-gray-200 px-6 py-3 sm:py-4">
      <div className="z-10 absolute left-0">
        {eventType === 'new' ? (
          <AddIcon className="fill-blue-600" innerFill="white" />
        ) : eventType === 'finished' ? (
          <TaskDoneIcon className="fill-blue-600" innerFill="white" />
        ) : (
          <CheckIcon className="fill-blue-600" innerFill="white" />
        )}
      </div>
      {eventType === 'finished' ? (
        <span className="text-xs text-gray-700 sm:text-sm">
          Projekt {projectName} został zakończony.
        </span>
      ) : (
        <span className="text-xs text-gray-700 sm:text-sm">
          <span className="font-semibold">{coordinatorName}</span>
          {contents[eventType]} {projectName}.
        </span>
      )}
    </div>
  );
};
