"use client";
import ApiRequest from "@/app/_lib/Api_request";
import { GetCookies } from "@/app/_lib/cookiesSetting";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
      const response = await ApiRequest({
        url: "/get_documentation",
        method: "get",
      });

      if (response.status === 200) {
        setData(response.data);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="scale-x-95 lg:scale-x-100 w-[98%] lg:w-[60%]">
        <div className="mt-[70px] space-y-5">
          {data?.map((item, index) => (
            <div
              key={item?.id}
              className=" bg-white rounded-md px-5 py-4 lg:px-10 lg:py-5 text-justify"
            >
              <h2 className="text-2xl my-2 gradient-text">{item.title}</h2>
              <p className="text-lg text-gray-700">
                {parse(`${item.description}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentations;
