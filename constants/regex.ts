// zod has built-in .email() method

export const SIMPLE_PHONE_PATTERN = '^[0-9]{3} [0-9]{3} [0-9]{3}$';

export const SIMPLE_PHONE_REGEX = new RegExp(SIMPLE_PHONE_PATTERN);
