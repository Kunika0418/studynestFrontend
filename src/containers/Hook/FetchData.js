// src/hooks/useFetchData.js
import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom hook to fetch data
const FetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data); // Set fetched data
        setLoading(false); // Stop loading
      } catch (err) {
        setError('Failed to fetch data'); // Handle error
        setLoading(false);
      }
    };

    fetchData(); // Call the fetch function
  }, [url]); // Dependency array, refetch if the URL changes

  return { data, loading, error }; // Correct return of data, loading, and error
};

export default FetchData;
