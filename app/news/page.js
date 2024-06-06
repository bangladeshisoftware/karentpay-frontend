"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/app/_assets/more1.jpg";
import img2 from "@/app/_assets/more2.jpg";
import img3 from "@/app/_assets/more3.jpg";
import Link from "next/link";
const News = () => {
  const more = [
    {
      id: 1,
      image: img1,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 .",
      title: "ALPER KAMU",
      link: "UI Developer",
    },
    {
      id: 2,
      image: img2,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk ",
      title: "David Kameron",
      link: "Frontend Developer",
    },
    {
      id: 3,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1",
      title: "Lomer Smith",
      link: "Businessman",
    },
    {
      id: 4,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1",
      title: "Lomer Smith",
      link: "Businessman",
    },
    {
      id: 5,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1",
      title: "Lomer Smith",
      link: "Businessman",
    },
    {
      id: 6,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1",
      title: "Lomer Smith",
      link: "Businessman",
    },
    {
      id: 7,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1",
      title: "Lomer Smith",
      link: "Businessman",
    },
    {
      id: 8,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1",
      title: "Lomer Smith",
      link: "Businessman",
    },
    {
      id: 9,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1",
      title: "Lomer Smith",
      link: "Businessman",
    },
  ];
  const minifiedReviews = more?.slice(0, 18);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(more.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentReviews = more.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div>
      <div>
        <section className="">
          <div className="container mx-auto mt-20">
            <div className="mb-10">
              <h2 className="text-center text-[#443f35] text-3xl font-bold">
                Epayget News
              </h2>
              <p className="text-xl text-blue-500 text-center font-normal">
                Find out more news and more services{" "}
              </p>
            </div>
            <div className="border-b"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8 justify-center mt-20">
              {more.map((m) => (
                <div
                  className="w-full scale-110 lg:scale-100 md:scale-100 lg:w-full md:w-full sm:w-full lg:mb-0 mb-6 p-4 border rounded-md shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-x-15 hover:rotate-y-15"
                  key={m.id}
                >
                  <div className="h-full">
                    <Image
                      alt="testimonial"
                      className="w-full h-auto mb-8 object-cover object-center inline-block rounded-t-lg"
                      src={m.image}
                      width={200}
                      height={200}
                      priority
                    />
                    <div className="px-4 pb-10">
                      <h2 className="font-bold text-lg">{m.title}</h2>
                      <p className="">{m.description}</p>
                      <Link
                        href={m.link}
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
