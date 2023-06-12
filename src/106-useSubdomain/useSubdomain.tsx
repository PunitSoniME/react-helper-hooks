import { useState } from 'react';

export default function useSubdomain(position = 0) {
  const [subdomain] = useState(() => {
    try {
      return window?.location?.hostname?.split('.')[position];
    } catch (error: any) {
      console.error(error.message);
      return error.message;
    }
  });

  return subdomain;
}
