export const operations = (
  operation: string | null,
  n1: number,
  n2: number
) => {
  switch (operation) {
    case '×':
      return n1 * n2;
    case '÷':
      return n1 / n2;
    case '+':
      return n1 + n2;
    case '-':
      return n1 + n2;
    default:
      return 0;
  }
};
