"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import img1 from "@/app/_assets/About_img1.jpg";
import img2 from "@/app/_assets/About_img2.avif";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoDiamondOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div>
      <section className="container mx-auto mt-[70px]">
        <div data-aos="fade-right" className="flex justify-center  gap-10">
          <div>
            <Image src={img1} height={500} width={500} alt="" />
          </div>
          <div className="w-fit">
            <div
              className="bg-gradient-to-r w-20 p-4 mt-24 from-blue-500 to-purple-600"
              style={{ borderRadius: "5% 5% 5% 45%" }}
            >
              <IoDiamondOutline fontSize={40} />
            </div>
            <div className="border-b w-full">
              <h2 className="text-3xl font-bold mt-10">About Us</h2>
              <p className="mt-5 mb-5">
                Automatic Payment Gateway Solution Instant Withdraw
              </p>
            </div>
            <p className="mt-5 max-w-full md:max-w-2xl">
              An all-in-one payment gateway system where you can make secured
              payments anywhere and anytime.” Epayget is not just a payment
              solution; it’s a revolution in the digital transaction space.
              Designed to empower merchants with the ability to grow their
              online presence, it offers customers a flexible and highly secure
              platform for purchasing products. Accepting a wide range of
              payment methods, including both local and international debit and
              credit cards, Epayget is synonymous with reliability and ease
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-[70px]">
        <div data-aos="fade-left" className="flex justify-center  gap-10">
          <div className="w-fit">
            <div className=" w-full">
              <h2 className="text-3xl font-bold mt-24">
                Revolutionizing E-Commerce with Epayget
              </h2>
            </div>
            <p className="mt-5 max-w-full md:max-w-2xl">
              Epayget is redefining the way online payments are handled. It
              stands as a pillar in the digital economy, making it easier than
              ever for businesses to process transactions and manage their
              online storefronts. Its intuitive design and powerful features are
              tailored to meet the evolving demands of the digital market.
            </p>
          </div>
          <div className="mt-10">
            <Image src={img2} height={400} width={500} alt="" />
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-[70px]">
        <div data-aos="fade-right" className="flex justify-center  gap-10">
          <div>
            <Image src={img1} height={500} width={500} alt="" />
          </div>
          <div className="w-fit">
            <div className=" w-full">
              <h2 className="text-3xl font-bold mt-20">
                Cutting-edge technology Tailored for All
              </h2>
            </div>
            <p className="mt-5 max-w-full md:max-w-2xl">
              At the core of Epayget is a commitment to technological
              excellence. Built to serve developers, entrepreneurs, and
              consumers alike, Epayget maintains the highest international
              standards of safety. Its user-friendly interface ensures
              transactions are completed with minimal steps, yet with maximum
              efficiency. As the first platform in the region to offer a
              developer-friendly API, Epayget simplifies integration, enabling
              merchants to seamlessly connect and utilize its advanced features
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-48px]">
        <div data-aos="fade-left" className="flex justify-center  gap-10">
          <div className="w-fit">
            <div className=" w-full">
              <h2 className="text-3xl font-bold mt-24">
                Why You Choose Epayget
              </h2>
              <ul className="flex flex-col gap-3 mt-5">
                <li className="flex items-center">
                  <IoCheckmarkOutline
                    className="text-green-700"
                    fontSize={20}
                  />{" "}
                  High experienced FinTech company
                </li>
                <li className="flex items-center">
                  <IoCheckmarkOutline
                    className="text-green-700"
                    fontSize={20}
                  />
                  Expert and well skilled team members
                </li>
                <li className="flex items-center">
                  <IoCheckmarkOutline
                    className="text-green-700"
                    fontSize={20}
                  />
                  Passionate free dedicated support
                </li>
                <li className="flex items-center">
                  <IoCheckmarkOutline
                    className="text-green-700"
                    fontSize={20}
                  />
                  24/7 Dedicated support
                </li>
                <li className="flex items-center">
                  <IoCheckmarkOutline
                    className="text-green-700"
                    fontSize={20}
                  />
                  Innovative FinTech Features
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <Image src={img2} height={400} width={500} alt="" />
          </div>
        </div>
      </section>

      {/* <section className="w-full mt-[70px]">
        <div className=" w-full text-3xl font-bold text-center ">
          <h2>Know more about </h2>
          <Link href="/">
            <span>The Epayget</span>
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default About;
