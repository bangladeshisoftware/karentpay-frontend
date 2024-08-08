"use client";
import img1 from "@/app/_assets/Homepage Slider.webp";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useFetchingData from "@/lib/useFetchingData";
import Image from "next/image";
import Link from "next/link";

const Slider = () => {
  const { fetchData } = useFetchingData("/api/front/home-image-sliders");

  return (
    <div className="h-[60vh]">
      {!fetchData || fetchData?.length === 0 ? (
        <div className="relative">
          <div className="animate-pulse">
            <div className="w-full h-[60vh] bg-gray-50"></div>
            <div className="absolute inset-0 flex items-center px-4 sm:px-8 lg:px-16">
              <div className="container mx-auto">
                <div className="bg-gray-200 h-10 lg:w-[60%] mb-2 sm:mb-4 lg:mb-6 mt-2 sm:mt-10 lg:mt-6"></div>
                <div className="hidden sm:flex flex-row lg:flex-row items-center gap-2 sm:gap-4 sm:flex-col md:flex-col">
                  <div className="bg-gray-200 h-10 w-32 sm:w-48 lg:w-64"></div>
                  <div className="bg-gray-200 h-10 w-32 sm:w-48 lg:w-64"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Carousel className="relative" opts={{ loop: true }}>
          <CarouselContent>
            {fetchData.length > 0 ? (
              fetchData.map((slider, index) => (
                <CarouselItem className="p-0 relative" key={index}>
                  <Image
                    src={slider?.BannerImage}
                    alt={slider?.BannerText || "Banner Image"}
                    className="w-full h-[60vh]"
                    width={1000}
                    height={700}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 flex items-center px-4 sm:px-8 lg:px-16">
                    <div className="container mx-auto">
                      <h2 className="text-white font-bold lg:w-[60%] text-2xl sm:text-2xl md:text-2xl lg:text-5xl mb-2 sm:mb-4 lg:mb-6 mt-2 sm:mt-10 lg:mt-6">
                        {slider.BannerText}
                      </h2>
                      <div className="hidden sm:flex flex-row lg:flex-row items-center gap-2 sm:gap-4 sm:flex-col md:flex-col">
                        <Link href="http://karentpay-api.test">
                          <Button className="bg-pink-600 px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg">
                            {slider.ButtonText1}
                          </Button>
                        </Link>
                        <Link href="http://karentpay-api.test">
                          <Button className="bg-pink-600 px-16 py-1 text-xs sm:px-12 sm:py-2 sm:text-sm md:px-16 md:py-3 md:text-base lg:px-16 lg:py-4 lg:text-lg">
                            {slider.ButtonText2}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))
            ) : (
              <div className="text-center text-gray-500">No data available</div>
            )}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-4 lg:left-12 opacity-30 hover:opacity-100" />
          <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4 lg:right-12 opacity-30 hover:opacity-100" />
        </Carousel>
      )}
    </div>
  );
};

export default Slider;
