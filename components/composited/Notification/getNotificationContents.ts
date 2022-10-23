export type NotificationType =
  | 'applicationAccepted'
  | 'newApplication'
  | 'newProject'
  | 'projectVotingComplete';

export const getNotificationTitle = (notificationName: NotificationType) => {
  switch (notificationName) {
    case 'applicationAccepted':
      return 'Akceptacja podania';
    case 'newApplication':
      return 'Nowe podanie';
    case 'newProject':
      return 'Nowy projekt';
    case 'projectVotingComplete':
      return 'Zakończenie głosowania';
  }
};

export const getNotificationDescription = (notificationName: NotificationType) => {
  switch (notificationName) {
    case 'applicationAccepted':
      return ['Twoje podanie do grupy ', ' zostało pomyślnie rozpatrzone.'];
    case 'newApplication':
      return ['Pojawiło się nowe podanie do twojej grupy ', '.'];
    case 'newProject':
      return ['Utworzono nowy projekt zagospodarowania budżetu w grupie ', '.'];
    case 'projectVotingComplete':
      return ['Projekt w grupie ', ' oczekuje rozpatrzenia.'];
  }
};
