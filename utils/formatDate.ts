export const formatDate = (dateInput: string | Date) => {
  return new Date(dateInput).toLocaleDateString('pl-PL', { dateStyle: 'long' });
};
