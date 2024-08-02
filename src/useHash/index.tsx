import React from 'react';

type UseHashType = [
  hash: string,
  updateHash: (newHash: any) => void
];

/**
 * @since 1.10.1
 */
export default function useHash(): UseHashType {
  const [hash, setHash] = React.useState<string>(() => window.location.hash);

  const hashChangeHandler = React.useCallback(() => {
    setHash(window.location.hash);
  }, []);

  React.useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);
    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, []);

  const updateHash = React.useCallback(
    (newHash: any) => {
      if (newHash !== hash) window.location.hash = newHash;
    },
    [hash]
  );

  return [hash, updateHash];
}
