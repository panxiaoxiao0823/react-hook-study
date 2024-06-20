import { useState, useEffect } from "react";
import axios from "axios";

// 封装 axios 的自定义hook
function useAxios(url, config = {}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    console.log('==>useEffect');
    setLoading(true);
    axios
      .get(url)
      .then((data) => {
        setTimeout(() => {
          setData(data)
        }, 5000);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  // }, [url, config]);
  }, [url]);

  return [loading, data, error];
}

export default useAxios;
