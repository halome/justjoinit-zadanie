export const thousandSeparator = (a: number | string): string => {
  return `${a}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
