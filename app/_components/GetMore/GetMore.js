"use client";
import { htmlToTextConverter } from "@/lib/htmlToTextConverter";
import useFetchingData from "@/lib/useFetchingData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GetMore = () => {
  const { fetchData } = useFetchingData("/api/front/news/articles");
  const { fetchData: settingsData } = useFetchingData(
    "/api/front/setting/logo-identity"
  );

  return (
    <section className="mt-[70px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-0">
            Get more from{" "}
            <span className=" gradient-text">
              {" "}
              {settingsData?.settings?.siteName}
            </span>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-center mt-10">
          {fetchData && fetchData.length > 0
            ? fetchData?.slice(0, 6)?.map((news) => (
                <Link
                  href={`/news/${news?.id}`}
                  className="w-full scale-110 lg:scale-100 md:scale-100 mb-6 border rounded-lg shadow-lg"
                  key={news?.id}
                >
                  <div className="h-full bg-white rounded-md">
                    <Image
                      alt="testimonial"
                      className="w-full h-56 mb-8 object-cover object-center inline-block rounded-t-lg"
                      src={news?.featured_image ? news?.featured_image : ""}
                      width={400}
                      height={300}
                      priority
                    />
                    <div className="px-4 pb-5">
                      <h2 className="font-bold text-lg">{news?.title}</h2>
                      <p className="text-justify">
                        {news?.content
                          ? htmlToTextConverter(news?.content?.slice(0, 150)) +
                            "..."
                          : ""}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            : Array.from({ length: 6 }).map((_, index) => (
                <div
                  className="w-full scale-110 lg:scale-100 md:scale-100 mb-6 border rounded-lg shadow-lg animate-pulse"
                  key={index}
                >
                  <div className="h-full bg-white rounded-md">
                    <div className="w-full h-56 mb-8 bg-gray-200 rounded-t-lg"></div>
                    <div className="px-4 pb-5">
                      <div className="h-6 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded mb-1"></div>
                      <div className="h-4 bg-gray-200 rounded mb-1"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
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
