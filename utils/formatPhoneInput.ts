// Insert space between each 3 digit group
export const formatPhoneInput = (value: string) => {
  if ((value.length === 4 || value.length === 8) && value.slice(-1) !== ' ') {
    return value.slice(0, -1) + ' ' + value.slice(-1);
  }
  return value;
};
