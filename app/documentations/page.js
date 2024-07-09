'use client';
import React,{useState,useEffect} from 'react';
import ApiRequest from "@/app/_lib/Api_request";
import { GetCookies } from "@/app/_lib/cookiesSetting";
import { toast } from "react-toastify";

const Documentations = () => {
const[data,setData]=useState([]);
  useEffect(() => {
    fatchData();
  }, []);

  const fatchData = async () => {
    const token = await GetCookies({ name: "auth_token" });
    if (token) {
      const response = await ApiRequest({
        url: "/get_documentation",
        method: "get",
      });
      if (response.status == 200) {
       console.log(response);
      } else {
        toast.error(response.message);
      }
    }
  };

  return (
    <div>Documentations</div>
  )
}

export default Documentations