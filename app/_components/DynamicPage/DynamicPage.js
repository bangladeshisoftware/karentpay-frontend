"use client";

import axios from "axios";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

const DynamicPage = ({ page }) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/front/page/${page}`
      );
      setPost(response.data);
      setLoading(false);
    };
    fetchPost();
  }, [page]);

  return (
    <div className="">
      {loading ? (
        <div className="animate-pulse p-5">
          <div className="h-10 bg-gray-300 rounded-md mb-5 w-3/4 mx-auto"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded-md"></div>
            <div className="h-4 bg-gray-300 rounded-md"></div>
            <div className="h-4 bg-gray-300 rounded-md"></div>
            <div className="h-4 bg-gray-300 rounded-md"></div>
            <div className="h-4 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      ) : (
        <div className=" bg-white text-justify p-5 rounded-md">
          <h1 className="lg:text-3xl text-2xl font-bold mb-5 text-center">
            {post.page_name}
          </h1>
          <p>{parse(`${post.content}`)}</p>
        </div>
      )}
    </div>
  );
};

export default DynamicPage;
