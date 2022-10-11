// Insert spaces every 3 characters to display phone number correctly
export const formatPhoneInput = (phoneInput: string) => {
  if ((phoneInput.length === 4 || phoneInput.length === 8) && phoneInput.slice(-1) !== ' ') {
    return phoneInput.slice(0, -1) + ' ' + phoneInput.slice(-1);
  }
  return phoneInput;
};
