export const hoursIntoMilliseconds = (h, m, s) => {
  const convertedValue = (h * 60 * 60 + m * 60 + s) * 1000;
  return convertedValue;
};
