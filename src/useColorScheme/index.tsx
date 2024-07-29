import { useEffect, useState } from 'react';

export default function useColorScheme() {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [colorScheme, setColorScheme] = useState<'dark' | 'light'>(
    isDarkMode ? 'dark' : 'light'
  );

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light';
        setColorScheme(newColorScheme);
      });

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', (event) => {
          setColorScheme(event.matches ? 'dark' : 'light');
        });
    };
  }, []);

  return colorScheme;
}
