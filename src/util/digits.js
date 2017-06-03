import { isColon } from './string';

export function getSeconds(digits) {
  let seconds = 0;

  const multipliers = {
    0: 1,
    1: 10,
    2: 60,
    3: 600,
    4: 3600,
    5: 36000,
  };

  digits.split('').reverse().filter(digit => !isColon(digit)).forEach((digit, index) => {
    seconds += digit * multipliers[index];
  });

  return seconds;
}
