import { useState } from 'react';

export default function useIsAppOffline() {
  const [isAppOffline, setIsAppOffline] = useState(!navigator.onLine);

  window.addEventListener('online', function () {
    setIsAppOffline(false);
  });

  window.addEventListener('offline', function () {
    setIsAppOffline(true);
  });

  return isAppOffline;
}
