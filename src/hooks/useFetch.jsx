import { useEffect, useState } from "react";
import { sessionCache } from "../utils/sessionCaching";

export const useFetch = (url) => {
  const [userData, setUserData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus("loading");
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const cacheData = sessionCache.get(url);
        if (cacheData) {
          setUserData(cacheData);
          setStatus("success");
          return;
        }
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error("Failed to Fetch Data");
        const data = await response.json();
        setUserData(data);
        setStatus("success");
        sessionCache.set(url, data);
      } catch (error) {
        if (error.name === "AbortError") return;
        setStatus("error");
        setError(error.message);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { userData, status, error };
};
