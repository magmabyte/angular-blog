const monthNames = [
  'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December'
];

export const prettyDate = (date: Date): string =>
  date.getDate() + ' ' +
  monthNames[date.getMonth()] + ' ' +
  date.getFullYear();
