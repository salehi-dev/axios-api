import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface ApiResponse {
  // structure of api data
}

const useApi = (url: string): [ApiResponse | null, boolean, Error | null] => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<ApiResponse> = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // fire, when url change

  return [data, loading, error];
};

export default useApi;
