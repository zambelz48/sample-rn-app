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

