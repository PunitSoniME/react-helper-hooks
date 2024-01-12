import { useEffect, useState } from 'react';

export default function useGeolocation(options: PositionOptions = {}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const successHandler = (e: any) => {
      setLoading(false);
      setError(null);
      setData(e.coords);
    };

    const errorHandler = (e: any) => {
      setError(e);
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    );

    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );

    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
}
