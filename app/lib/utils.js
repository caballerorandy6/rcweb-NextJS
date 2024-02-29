export const yearsOfExperience = (startYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};
