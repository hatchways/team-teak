export const convertDate = (date: string): string => {
  const monthsInString = [
    ,
    'January',
    'February',
    'Marth',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dateArray = date.split('/');

  return `${dateArray[1]} ${monthsInString[Number(dateArray[0])]} ${dateArray[2]}`;
};
