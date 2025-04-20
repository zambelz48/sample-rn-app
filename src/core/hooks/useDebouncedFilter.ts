import React from 'react';

export const useDebouncedFilter = (delay: number = 500) => {
  const [keyword, setKeyword] = React.useState<string>('');
  const [filterKeyword, setFilterKeyword] = React.useState<string | null>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFilterKeyword(keyword);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword, delay]);

  return {
    filterKeyword,
    setFilterKeyword: setKeyword,
  };
};
