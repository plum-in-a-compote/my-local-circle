import { Checkbox } from '../../generic/Checkbox/Checkbox';

type PreferencesFormProps = {
  newProject: boolean;
  applicationAccepted: boolean;
  newApplication: boolean;
  projectVotingComplete: boolean;
};

export const PreferencesForm = ({
  newProject,
  applicationAccepted,
  newApplication,
  projectVotingComplete,
}: PreferencesFormProps) => {
  return (
    <form>
      <Checkbox
        defaultChecked={newProject}
        name="newProject"
        label="Nowe projekty"
        description="Otrzymuj powiadomienia o nowych propozycjach zagospodarowania budżetu w społecznościach, do których należysz."
      />
      {/* <Checkbox name="applicationAccepted" /> */}
    </form>
  );
};
