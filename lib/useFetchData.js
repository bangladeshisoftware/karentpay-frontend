"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("auth_token");
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BASE_URL + `/api/` + url,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response?.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
