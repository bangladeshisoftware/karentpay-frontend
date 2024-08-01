"use client";
import customerSupport from "@/app/_assets/customer-agent.png";
import easyIntegration from "@/app/_assets/data-integration.png";
import notificationImage from "@/app/_assets/notification.png";
import secureApiImage from "@/app/_assets/secure.png";
import global from "@/app/_assets/targeting.png";
import flexibilityImage from "@/app/_assets/yay.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetchingData from "@/lib/useFetchingData";
import Image from "next/image";

const Features = () => {
  const { fetchData } = useFetchingData("/api/front/payment-feature-showcases");

  return (
    <section className="container mx-auto mt-[60px] ">
      <h2 className="text-3xl font-bold flex text-center">
        Why choose our payment system
      </h2>
      {fetchData && fetchData.length > 0 ? (
        <div className="grid lg:grid-cols-3  grid-cols-1 gap-x-4 gap-y-10 mt-12  justify-center mx-auto">
          {fetchData?.map((feature) => (
            <Card
              className="w-full scale-110 lg:scale-100 md:scale-100 lg:w-full md:w-full  mx-auto shadow-lg"
              key={feature.id}
            >
              <CardHeader>
                <Image
                  src={process.env.NEXT_PUBLIC_BASE_URL + feature.image}
                  alt={feature.image}
                  width={100}
                  height={100}
                  className="w-20 mb-2"
                />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-justify text-sm">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-3  grid-cols-1 gap-x-4 gap-y-10 mt-12  justify-center mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              className="w-full scale-110 lg:scale-100 md:scale-100 mx-auto shadow-lg animate-pulse"
              key={index}
            >
              <CardHeader>
                <div className="w-20 h-20 mb-2 bg-gray-200" />
                <div className="h-6 bg-gray-200 rounded mb-2" />
                <div className="h-4 bg-gray-200 rounded mb-1" />
                <div className="h-4 bg-gray-200 rounded mb-1" />
                <div className="h-4 bg-gray-200 rounded" />
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default Features;
