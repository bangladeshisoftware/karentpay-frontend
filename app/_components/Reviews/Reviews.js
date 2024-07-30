"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import useFetchingData from "@/lib/useFetchingData";

const Reviews = () => {

  const  { fetchData } = useFetchingData('/api/front/reviews')
  const reviews = fetchData.filter(data => data.status ==="approved" )


  return (
    <section className="mt-[70px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-0">
            Customer Reviews
          </h2>
          <Link
            href="/customer-reviews"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-1 w-fit text-sm"
          >
            Show more <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-4  justify-center mt-10 ">
          {reviews.slice(0, 3).map((review) => (
            <div
              className=" w-full  md:w-[48%] lg:w-[32.5%] scale-110 lg:scale-100 md:scale-100  p-4 border rounded-lg shadow-lg bg-white"
              key={review.id}
            >
              <div className="h-full text-center relative">
                <Image
                  alt="testimonial"
                  className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 mt-8 bg-gray-100"
                  src={process.env.NEXT_PUBLIC_BASE_URL + review.user_image}
                  width={200}
                  height={200}
                  priority
                />
                <p className="leading-relaxed text-sm sm:text-base md:text-sm lg:text-base text-justify pb-20">
                  {review.review_details.length>200? review.review_details.slice(0, 200)+"...": review.review_details}
                </p>
                <div className="absolute left-0 bottom-0 w-full flex justify-center ">
                  <div className="mb-8">

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
