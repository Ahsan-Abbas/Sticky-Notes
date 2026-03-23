// Validate email format
export  const validateEmail = (email: string): boolean => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

// Validate phone number
export const validatePhoneNumber = (phoneNumber: string): boolean => /\+[1-9]{1}[0-9]{0,2}\(?[1-9]{1}\)?\d{9}$/.test(phoneNumber);
