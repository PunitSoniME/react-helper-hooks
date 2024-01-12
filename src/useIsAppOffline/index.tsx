import { useState } from 'react';

export default function useIsAppOffline() {
  const [isAppOffline, setIsAppOffline] = useState(!navigator.onLine);

  window.addEventListener('online', function (e) {
    setIsAppOffline(false);
  });

  window.addEventListener('offline', function (e) {
    setIsAppOffline(true);
  });

  return isAppOffline;
}
