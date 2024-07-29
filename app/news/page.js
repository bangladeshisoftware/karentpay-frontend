"use client";

import img1 from "@/app/_assets/more1.jpg";
import img2 from "@/app/_assets/more2.jpg";
import img3 from "@/app/_assets/more3.jpg";
import { htmlToTextConverter } from "@/lib/htmlToTextConverter";
import useFetchingData from "@/lib/useFetchingData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const News = () => {

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const { fetchData } = useFetchingData("/api/front/news/articles");

  const totalPages = Math.ceil(fetchData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPost = fetchData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div>
        <section className="">
          <div className="container mx-auto mt-20">
            <div className="mb-10">
              <h2 className="text-center text-[#443f35] text-3xl font-bold">
                <span className="gradient-text">Karentpay</span> News
              </h2>
              <p className="text-xl mt-4 text-center font-normal">
                Find out more news and more services{" "}
              </p>
            </div>
            <div className="border-b"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8 justify-center mt-20">
              {currentPost?.map((news) => (
                <div
                  className="bg-white w-full scale-110 lg:scale-100 md:scale-100 lg:w-full md:w-full sm:w-full lg:mb-0 mb-6 p-4 border rounded-md shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-x-15 hover:rotate-y-15"
                  key={news?.id}
                >
                  <div className="h-full">
                    <Image
                      alt="testimonial"
                      className="w-full h-56 mb-8 object-cover object-center inline-block rounded-t-lg"
                      src={news?.featured_image ? news?.featured_image : ""}
                      width={200}
                      height={100}
                      priority
                    />
                    <div className="px-4 pb-10">
                      <h2 className="font-bold text-lg">{news?.title}</h2>
                      <p className="">
                        {news?.content
                          ? htmlToTextConverter(news?.content?.slice(0, 300)) +
                            "..."
                          : ""}
                      </p>
                      <Link
                        href={`/news/${news?.id}`}
                        className="block w-fit mt-3 px-6 py-2 rounded bg-blue-600 text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-3 py-1 rounded-md ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
