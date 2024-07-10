'use client';
import React, { useState, useEffect } from 'react';
import ApiRequest from "@/app/_lib/Api_request";
import { GetCookies } from "@/app/_lib/cookiesSetting";
import { toast } from "react-toastify";
const { convert } = require('html-to-text');

const Documentations = () => {

  const options = {
    wordwrap: 130,
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const token = await GetCookies({ name: "auth_token" });
      const response = await ApiRequest({
        url: "/get_documentation",
        method: "get",
      });

      if (response.status === 200) {
        const formattedData = response.data.map(item => ({
          ...item,
          description: htmlToText(item.description) // Convert HTML to plain text
        }));
        setData(formattedData);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to convert HTML to plain text
  const htmlToText = (html) => {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  // if (loading) return <p>Loading...</p>; // Render loading indicator while fetching data

  // if (error) return <p>Error: {error}</p>; // Render error message if request fails

  return (
    <div className='scale-x-95 lg:scale-x-100 lg:container'>
      <div className='my-2'>
        {data.map((item, index) => (
          <div key={index} className='mb-4 bg-white rounded-md px-2 py-2'>
            <h2 className='text-2xl my-2 gradient-text'>{item.title}</h2>
            <p className='text-lg  text-gray-700'>{convert(item.description, options).replace(/"/g, "")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentations;
