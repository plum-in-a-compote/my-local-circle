export type NotificationType =
  | 'applicationAccepted'
  | 'newApplication'
  | 'newProject'
  | 'projectVotingComplete';

export const getNotificationContents = (notificationName: NotificationType) => {
  switch (notificationName) {
    case 'applicationAccepted':
      return ['Akceptacja podania', 'Twoje podanie do grupy ', ' zostało pomyślnie rozpatrzone.'];
    case 'newApplication':
      return ['Nowe podanie', 'Pojawiło się nowe podanie do twojej grupy ', '.'];
    case 'newProject':
      return ['Nowy projekt', 'Utworzono nowy projekt zagospodarowania budżetu w grupie ', '.'];
    case 'projectVotingComplete':
      return ['Zakończenie głosowania', 'Projekt w grupie ', ' oczekuje rozpatrzenia.'];
  }
};
