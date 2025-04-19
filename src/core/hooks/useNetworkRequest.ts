import React from 'react';

export const useNetworkRequest = <T,>() => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);
  const [response, setResponse] = React.useState<T | null>(null);

  const request = React.useCallback(async (url: string) => {
    setLoading(true);

    try {
      const req = await fetch(url);
      if (!req.ok) {
        setError(new Error(`Request failed with status ${req.status}`));
        setResponse(null);
        return;
      }

      const json = await req.json();
      setError(null);
      setResponse(json);
    } catch (e) {
      setError(e as Error);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    response,
    request,
  };
};
