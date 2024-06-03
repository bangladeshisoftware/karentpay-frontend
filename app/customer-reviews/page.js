"use client";
import React, { useState } from "react";
import Reviews from "../_components/Reviews/Reviews";
import img1 from "@/app/_assets/r1.jpg";
import img2 from "@/app/_assets/r2.jpg";
import img3 from "@/app/_assets/r3.jpg";
import Image from "next/image";
const CustomerReview = () => {
  const reviews = [
    {
      id: 1,
      image: img1,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "ALPER KAMU",
      designation: "UI Developer",
    },
    {
      id: 2,
      image: img2,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "David Kameron",
      designation: "Frontend Developer",
    },
    {
      id: 3,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 4,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 5,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 6,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 7,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 8,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 9,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 10,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 11,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 12,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 13,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 14,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 15,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 16,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 17,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 18,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
  ];
  const minifiedReviews = reviews?.slice(0, 18);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div>
      <section className="">
        <div className="container mx-auto mt-20">
          <div className="mb-10">
            <h2 className="text-center text-[#443f35] text-3xl font-bold">
              Customer Reviews
            </h2>
            <p className="text-xl text-blue-500 text-center font-normal">
              See what people saying about us
            </p>
          </div>
          <div className="border-b"></div>
          <div className="flex flex-wrap gap-8 justify-center mt-10">
            {currentReviews.map((review) => (
              <div
                className="lg:w-[28%] lg:mb-0 mb-6 p-4 border rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-x-15 hover:rotate-y-15"
                key={review.id}
              >
                <div className="h-full text-center">
                  <Image
                    alt="testimonial"
                    className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={review.image}
                    width={200}
                    height={200}
                    priority
                  />
                  <p className="leading-relaxed">{review.description}</p>
                  <span className="inline-block h-1 w-10 rounded bg-blue-600 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm">
                    {review.name}
                  </h2>
                  <p className="text-gray-500">{review.designation}</p>
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
  );
};

export default CustomerReview;
