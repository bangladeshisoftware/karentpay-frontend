"use client";

import img1 from "@/app/_assets/more1.jpg";
import img2 from "@/app/_assets/more2.jpg";
import img3 from "@/app/_assets/more3.jpg";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const GetMore = () => {
  const [newses, setNewses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const newsData = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/front/news/articles`
      );

      setNewses(newsData?.data);
      setLoading(false);
    } catch (error) {
      // console.error("Error fetching reviews:", error);
      setNewses([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mt-[70px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-0">
            Get more from Karentpay
          </h2>
          <Link
            href="/news"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-1 w-fit text-sm"
          >
            See all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="mt-6 text-lg md:text-xl text-center md:text-left">
          Become a member of Karentpay family and enjoy exclusive features and
          offers that enlighten your business
        </p>
        <div className="flex flex-wrap gap-4 gap-y-10 justify-center md:justify-between  mt-10">
          {newses?.map((news) => (
            <div
              className="w-full scale-110 lg:scale-100 md:scale-100  md:w-[48%] lg:w-[32.5%]  mb-6 border rounded-lg shadow-lg"
              key={news?.id}
            >
              <div className="h-full bg-white rounded-md">
                <Image
                  alt="testimonial"
                  className="w-full h-auto mb-8 object-cover object-center inline-block rounded-t-lg"
                  src={
                    news?.featured_image
                      ? `${process.env.NEXT_PUBLIC_BASE_URL}/public/${news?.featured_image}`
                      : ""
                  }
                  width={400}
                  height={300}
                  priority
                />
                <div className="px-4 pb-10">
                  <h2 className="font-bold text-lg">{news?.title}</h2>
                  <p className="text-justify">{news?.content}</p>
                  <Link
                    href={`/news/${news?.id}`}
                    className="block w-fit mt-3 px-6 py-2 rounded bg-blue-600 text-white text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetMore;
