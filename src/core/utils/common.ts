export const mergeClassNames = (
  initial: string,
  other?: string
) => {
  const regex = /\s+/g;
  const splittedInitial = initial.replace(regex, ' ')
  .trim()
  .split(' ');
  const splittedOtherClassName = other ? other
    .replace(regex, ' ')
    .trim()
    .split(' ') : [];

  const mergedClassName = [
    ...new Set([
      ...splittedInitial,
      ...splittedOtherClassName,
    ]),
  ];

  return mergedClassName.join(' ');
};

export const formatBankName = (bankName: string) => {
  switch (bankName.toLowerCase()) {
    case 'bca':
    case 'bni':
    case 'bsm':
    case 'bri':
    case 'btpn':
      return bankName.toUpperCase();

    case 'mandiri':
    case 'muamalat':
    case 'permata':
      return bankName.charAt(0).toUpperCase() + bankName.slice(1);

    default:
      return bankName;
  }
};

export const formatAmount = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

