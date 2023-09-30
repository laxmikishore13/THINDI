import { useState, useEffect } from "react";

export type TApiResponse = {
  status: number;
  statusText: string;
  data: [] | null;
  error: boolean;
  loading: boolean;
};

export default function useFetch(url: string): TApiResponse {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<[] | null>(null);

  const getFetchRequest = async () => {
    setLoading(true);
    try {
      const fetchApi = await fetch(url);
      const fetchResponse = await fetchApi.json();
      setStatus(fetchResponse.status);
      setStatusText(fetchResponse.statusText);
      setData(fetchResponse?.data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getFetchRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return { status, statusText, loading, data, error };
}
