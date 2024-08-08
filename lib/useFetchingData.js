import axios from "axios";
import { useEffect, useState } from "react";


function useFetchingData(url) {
    const [fetchData, setFetchData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`);
            setFetchData(response?.data);
          } catch (err) {
            console.error("Error fetching reviews:", err);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, [url]);
    
      return { fetchData, loading };
}

export default useFetchingData;