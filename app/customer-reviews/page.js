"use client";
import React, {  useState } from "react";
import Image from "next/image";
import useFetchingData from "@/lib/useFetchingData";
const CustomerReview = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const  { fetchData,loading } = useFetchingData('/api/front/reviews')

  
  const reviews = fetchData.filter(data => data.status ==="approved" )


  const itemsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + itemsPerPage);


  return (
    <section >
      {
        loading ? <div>Loading...</div> :
          <div className="container mx-auto mt-20">
            <div className="mb-10">
              <h2 className="text-center text-[#443f35] text-3xl font-bold">
                Customer Reviews
              </h2>
              <p className="text-xl mt-4 text-center font-normal">
                See what people saying about us
              </p>
            </div>
            <div className="border-b"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-center mt-20 w-full">
              {currentReviews.map((review, index) => (
                <div
                  className="bg-white w-full scale-110 lg:scale-100 md:scale-100 lg:w-full md:w-full lg:mb-0 mb-6 p-4 border rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-x-15 hover:rotate-y-15"
                  key={index}
                >
                  <div className="h-full text-center">
                    <Image
                      alt="testimonial"
                      className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={process.env.NEXT_PUBLIC_BASE_URL + review.user_image}
                      width={200}
                      height={200}
                      priority
                    />
                    <p className="leading-relaxed text-justify">{review.review_details}</p>
                    <span className="inline-block h-1 w-10 rounded bg-blue-600 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm">
                      {review.user_name}
                    </h2>
                    <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm">
                      {review.position}
                    </h2>
                    <p className="text-gray-500">{review.user_email}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
      }
    </section>
  );
};

export default CustomerReview;
