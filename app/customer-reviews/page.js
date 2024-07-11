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
        "Karentpay has transformed the way we handle transactions. The seamless integration and robust security features have given us the confidence to expand our payment options, and the real-time notifications keep us on top of every transaction. Their support team is always responsive and helpful. Highly recommended!",
      name: "John Smith, CEO of Tech Innovations",
      designation: "UI Developer",
    },
    {
      id: 2,
      image: img2,
      description:
        "As a small business owner, I needed a payment gateway that was both reliable and easy to use. Karentpay exceeded my expectations with its flexible payment methods and user-friendly interface. The analytics dashboard provides valuable insights into my sales, helping me make informed decisions. Karentpay has truly been a game-changer for my business.",
      name: "Sarah Johnson, Owner of Boutique Bliss",
      designation: "Frontend Developer",
    },
    {
      id: 3,
      image: img3,
      description:
      "We've been using Karentpay for over a year now, and it has been a fantastic experience. The secure API and advanced fraud detection give us peace of mind, and the seamless integration with our existing systems was a huge plus. The 24/7 customer support is top-notch, always ready to assist with any queries we have. Karentpay is a reliable partner for our payment processing needs.",
      name: "Michael Lee, CFO of Global Retailers Inc.",
      designation: "Businessman",
    },
    {
      id: 4,
      image: img1,
      description:
        "Karentpay has made managing our online payments a breeze. The flexibility to accept various payment methods has improved our customer satisfaction, and the real-time payment notifications keep our team updated on every transaction. The support team is always friendly and quick to resolve any issues. We couldn't be happier with Karentpay!",
      name: "Emily Davis, E-commerce Manager at Fashion Forward",
      designation: "Businessman",
    },
    {
      id: 5,
      image: img2,
      description:
        "Switching to Karentpay was one of the best decisions we've made for our company. The enhanced security features ensure our transactions are safe, and the comprehensive analytics help us track our performance effectively. The easy integration process saved us a lot of time and effort. Karentpay's service and features are truly outstanding.",
      name: "David Martinez, COO of Healthy Living Co.",
      designation: "Businessman",
    },
    {
      id: 6,
      image: img3,
      description:
        "Karentpay has been a fantastic addition to our business. The flexibility in payment options has made it easier for our customers to complete their purchases, and the security features give us peace of mind. The setup was smooth, and the customer support has been excellent!",
      name: "Olivia Brown, Founder of Artisanal Creations",
      designation: "Businessman",
    },
    {
      id: 7,
      image: img1,
      description:
        "Using Karentpay has significantly improved our checkout process. The integration was seamless, and the platform's flexibility allows us to offer various payment methods. We also appreciate the real-time notifications, which keep us updated on every transaction. Karentpay is a reliable partner.",
      name: "Lucas Thompson, Owner of Tech Hub",
      designation: "Businessman",
    },
    {
      id: 8,
      image: img2,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "Lomer Smith",
      designation: "Businessman",
    },
    {
      id: 9,
      image: img3,
      description:
        "Karentpay's easy integration and comprehensive analytics have been invaluable to our e-commerce operations. The security features are top-notch, and the customer support team is always responsive and helpful. We've seen a noticeable increase in customer satisfaction since switching to Karentpay.",
      name: "Ava White, Marketing Director at Beauty Bliss",
      designation: "Businessman",
    },
    {
      id: 10,
      image: img1,
      description:
       "We've been extremely satisfied with Karentpay. The secure API and advanced fraud detection ensure our transactions are safe, and the detailed reports help us track our sales effectively. The support team is always available to assist, making Karentpay a reliable choice for our payment processing needs.",
      name: "William Martinez, Co-Founder of Green Earth Supplies",
      designation: "Businessman",
    },
    {
      id: 11,
      image: img2,
      description:
        "Karentpay's real-time payment notifications have improved our transaction management significantly. The platform is user-friendly and secure, and the integration process was quick and hassle-free. We highly recommend Karentpay to other businesses looking for a reliable payment gateway.",
      name: "Sophia Clark, General Manager at Urban Outfitters",
      designation: "Businessman",
    },
    {
      id: 12,
      image: img3,
      description:
       "Karentpay offers everything we need in a payment gateway: flexibility, security, and ease of integration. The comprehensive analytics provide valuable insights into our financial performance, and the customer support is always top-notch. We're very pleased with our choice.",
      name: "James Hall, CTO of FinTech Solutions",
      designation: "Businessman",
    },
    {
      id: 13,
      image: img1,
      description:
       "Since switching to Karentpay, our transaction processing has been seamless and secure. The flexibility to accept multiple payment methods has been beneficial for our business, and the real-time notifications keep us informed about every payment. Karentpay has been a great partner for us.",
      name: "Mia Anderson, Sales Director at Home Essentials",
      designation: "Businessman",
    },
    {
      id: 14,
      image: img2,
      description:
        "Karentpay's advanced security features and easy integration have made a significant difference in our business operations. The platform is reliable, and the 24/7 customer support ensures we always have help when we need it. We're very happy with Karentpay's service.",
      name: "Ethan King, CEO of Digital Ventures",
      designation: "Businessman",
    },
    {
      id: 15,
      image: img3,
      description:
        "We love how Karentpay has simplified our payment process. The flexibility in payment methods and the user-friendly interface have enhanced our customer experience. The support team is always available to assist, making Karentpay a trusted partner for our business.",
      name: "Isabella Scott, Owner of Healthy Bites Cafe",
      designation: "Businessman",
    },
    {
      id: 16,
      image: img1,
      description:
        "Karentpay has been an excellent choice for our payment processing needs. The secure API and real-time notifications help us manage transactions efficiently, and the comprehensive analytics provide valuable insights. The integration was smooth, and the support team is always helpful. Highly recommended!",
      name: "Alexander Young, Operations Manager at Gadget World",
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
            <p className="text-xl mt-4 text-center font-normal">
              See what people saying about us
            </p>
          </div>
          <div className="border-b"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-center mt-20 w-full">
            {currentReviews.map((review) => (
              <div
                className="bg-white w-full scale-110 lg:scale-100 md:scale-100 lg:w-full md:w-full lg:mb-0 mb-6 p-4 border rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-x-15 hover:rotate-y-15"
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
                  <p className="leading-relaxed text-justify">{review.description}</p>
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
