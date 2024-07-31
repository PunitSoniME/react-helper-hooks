import { useState, useEffect } from 'react';

/**
 * @since 1.5.0
 */
export default function useWindowFocus() {
  const [focus, setFocus] = useState(document.hasFocus());

  useEffect(() => {
    const onFocus = () => setFocus(true);
    const onBlur = () => setFocus(false);

    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  }, []);

  return focus;
}
