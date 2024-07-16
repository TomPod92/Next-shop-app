export const capitalizeFirstLetter = (text: string) => {
  let capitalizedFirstLetter = text.charAt(0).toUpperCase() + text.slice(1);

  return capitalizedFirstLetter;
};
