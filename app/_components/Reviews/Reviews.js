"use client";
import Image from "next/image";
import img1 from "@/app/_assets/r1.jpg";
import img2 from "@/app/_assets/r2.jpg";
import img3 from "@/app/_assets/r3.jpg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Reviews = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  const staticReviews = [
    {
      id: 1,
      image: img1,
      description:
        "Karentpay has transformed the way we handle transactions. The seamless integration and robust security features have given us the confidence to expand our payment options, and the real-time notifications keep us on top of every transaction. Their support team is always responsive and helpful. Highly recommended!",
      name: "John Smith, CEO of Tech Innovations",
      designation: "UI Developeretfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgd",
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
  ];
  console.log("object");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("auth_token");
        if (token) {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/reviews`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setReviews(response.data);
        } else {
          console.warn("No auth token found");
          setReviews([]); // Use static data if no token is available
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setReviews([]); // Fallback to static data on error
      } finally {
        setLoading(false);
      }
    };

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
            Customer Reviews  
          </h2>
          <Link
            href="/customer-reviews"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-1 w-fit text-sm"
          >
            Show more <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 gap-y-10 justify-center mt-10 ">
          {reviews.map((review) => (
            <div
              className=" w-full  md:w-[48%] lg:w-[32.5%] scale-110 lg:scale-100 md:scale-100 mb-6 p-4 border rounded-lg shadow-lg bg-white"
              key={review.id}
            >
              <div className="h-full text-center ">
                <Image
                  alt="testimonial"
                  className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={process.env.NEXT_PUBLIC_BASE_URL + review.user_image}
                  width={200}
                  height={200}
                  priority
                />
                <p className="leading-relaxed text-sm sm:text-base md:text-sm lg:text-base text-justify">
                {review.review_details}
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-600 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm">
                {review.user_name}
                </h2>
                <p className="text-gray-500">{review.user_email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
