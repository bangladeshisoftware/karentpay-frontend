'use client';
import React, { useState, useEffect } from 'react';
import ApiRequest from "@/app/_lib/Api_request";
import { GetCookies } from "@/app/_lib/cookiesSetting";
import { toast } from "react-toastify";

const Documentations = () => {
  const [data, setData] = useState([]);
  useEffect(() => {

    getData();
  }, []);

  const getData = async () => {
    const token = await GetCookies({ name: "auth_token" });

    const response = await ApiRequest({
      url: "/get_documentation",
      method: "get",
    });
    console.log(response);
    if (response.status == 200) {
      setData(response.data);
    } else {
      toast.error(response.message);
    }

  };

  return (
    <div className='container'>

      <div>
      {data.map((item, index) => (
        <div key={index} className='mb-4 '>
          <h2 className='text-3xl my-2'>{item.title}</h2>
          <p className='text-md'>{item.description}</p>
        </div>
      ))}
      </div>


    </div>
  )
}

export default Documentations