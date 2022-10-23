import { Checkbox } from '../../generic/Checkbox/Checkbox';

type UserPreferences = {
  newProject: boolean;
  applicationAccepted: boolean;
  newApplication: boolean;
  projectVotingComplete: boolean;
};

type PreferencesFormProps = {
  preferences: UserPreferences;
};

export const PreferencesForm = ({ preferences }: PreferencesFormProps) => {
  return (
    <form className="flex flex-col gap-6">
      <Checkbox
        defaultChecked={preferences.newProject}
        name="newProject"
        label="Nowe projekty"
        description="Otrzymuj powiadomienia o nowych propozycjach zagospodarowania budżetu w społecznościach, do których należysz."
      />
      <Checkbox
        defaultChecked={preferences.applicationAccepted}
        name="applicationAccepted"
        label="Akceptacje próśb o dołączenie"
        description="Otrzymuj powiadomienia, gdy Twoje podanie do społeczności zostanie zaakceptowane."
      />
      <Checkbox
        defaultChecked={preferences.newApplication}
        name="newApplication"
        label="Nowe prośby o dołączenie"
        description="Otrzymuj powiadomienia o nowych prośbach o dołączenie do społeczności, których jesteś administratorem."
      />
      <Checkbox
        defaultChecked={preferences.projectVotingComplete}
        name="projectVotingComplete"
        label="Zakończone głosowania"
        description="Otrzymuj powiadomienia o zakończeniu głosowań w społecznościach, do których należysz."
      />
    </form>
  );
};
