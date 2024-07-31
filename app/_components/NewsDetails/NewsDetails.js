"use client";

import { htmlToTextConverter } from "@/lib/htmlToTextConverter";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const NewsDetails = ({ id }) => {
  const [newsDetails, setNewsDetails] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNewsDetails = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/front/news/articles/${id}`
      );

      setNewsDetails(res.data);
      setLoading(false);
    };

    getNewsDetails();
  }, [id]);

  return (
    <div className="p-5 bg-white text-justify lg:w-3/4 w-full rounded-lg">
      {loading ? (
        <div>
          <div className="w-full h-48 mb-8 bg-gray-200 animate-pulse rounded-t-lg"></div>

          <div className="px-4 pb-10">
            <div className="h-6 bg-gray-200 animate-pulse rounded-md mb-2"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded-md mb-4 w-1/4"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Image
            alt="testimonial"
            className="w-full h-auto mb-8 object-cover object-center inline-block rounded-t-lg"
            src={newsDetails?.featured_image ? newsDetails?.featured_image : ""}
            width={800}
            height={600}
            priority
          />

          <div className="px-4 pb-10">
            <h2 className="font-bold text-xl lg:text-2xl">
              {newsDetails?.title}
            </h2>
            <p className="text-sm text-gray-500">
              Category: {newsDetails?.category?.name}
            </p>
            <p className="mt-3">{htmlToTextConverter(newsDetails?.content)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetails;
