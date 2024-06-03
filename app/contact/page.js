import CardWithForm from "@/app/_components/ContactForm/ContactForm";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const contact = () => {
  return (
    <div className="container">
      {/* header div */}
      <div>
        <div className="flex justify-between py-10 ">
          {/* header and contact form */}
          <div className="container mt-12">
            <div>
              <h1 className="text-5xl py-10">Hi, how can we help?</h1>
            </div>
            <div>
              <h2 className="text-2xl py-5">Help & Support</h2>
            </div>
            <div className="text-xl text-gray-500 mb-10">
              Have questions or need to report an issue <br /> with a
              Bangladeshi Software product or service? <br /> We&apos;ve got you
              covered.
            </div>
            <div>
              <Button className="bg-[#3B67ED] gap-6">Get Support</Button>
            </div>
          </div>
          {/* contact form */}
          <div className="container flex justify-center py-10 ">
            <CardWithForm></CardWithForm>
          </div>
        </div>
      </div>
      {/* location */}
      <div className="container flex justify-between border shadow-md rounded-md transition duration-300 hover:shadow-lg hover:border-blue-500">
        <div className="py-24">
          <h2 className="text-2xl mb-4 transition duration-300 hover:text-blue-500">
            Bangladeshi Software HQ
          </h2>
          <p className="transition duration-300 hover:text-blue-500">
            1600 Amphitheatre Parkway <br /> Mountain View, CA 94043, USA
          </p>
          <Link href="\">
            <p className="text-blue-500 underline transition duration-300 hover:text-blue-700">
              .(650) 253-0000
            </p>
          </Link>
          <Button className="bg-[#3B67ED] mt-7 transition duration-300 hover:bg-blue-700">
            See all Location
          </Button>
        </div>
        <div>
          <div className="container py-24">
            <h2 className="text-2xl mb-4 transition duration-300 hover:text-blue-500">
              Local Branch Bangladeshi Software
            </h2>
            <p className="transition duration-300 hover:text-blue-500">
              1600 Amphitheatre Parkway <br /> Mountain View, CA 94043, USA
            </p>
            <Link href="\">
              <p className="text-blue-500 underline transition duration-300 hover:text-blue-700">
                .(650) 253-0000
              </p>
            </Link>
            <Button className="bg-[#3B67ED] mt-7 transition duration-300 hover:bg-blue-700">
              See all Location
            </Button>
          </div>
        </div>
      </div>
      {/* Google Map */}
      <div className="container py-10 border shadow-md rounded-md mt-10 transition duration-300 hover:shadow-lg hover:border-blue-500">
        {/* <GoogleMap /> */}
      </div>
    </div>
  );
};

export default contact;
