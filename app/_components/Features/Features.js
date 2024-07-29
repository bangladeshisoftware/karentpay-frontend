"use client"
import flexibilityImage from "@/app/_assets/yay.png";
import secureApiImage from "@/app/_assets/secure.png";
import notificationImage from "@/app/_assets/notification.png";
import global from "@/app/_assets/targeting.png"
import easyIntegration from "@/app/_assets/data-integration.png"
import customerSupport from "@/app/_assets/customer-agent.png"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import useFetchingData from "@/lib/useFetchingData";

const Features = () => {
  const features = [
    {
      id: 1,
      image: flexibilityImage,
      imageAltText:
        '<a href="https://www.freepik.com/icon/watchmaking_1459336#fromView=search&page=1&position=21&uuid=7c6e299c-8cfc-46f5-9ea8-5a05df83b75e">Icon by Flat-icons-com</a>',
      title: "Flexibility",
      description:
        "Our payment gateway supports multiple payment methods, including credit cards, debit cards, digital wallets, and more. This flexibility allows you to cater to a wide range of customers, enhancing their payment experience and boosting your conversion rates.",
    },
    {
      id: 2,
      image: secureApiImage,
      imageAltText:
        '<a href="https://www.freepik.com/icon/shield_1161388#fromView=search&page=1&position=1&uuid=2e3a143b-b064-4569-915d-127d3d9fc968">Icon by Freepik</a>',
      title: "Secure API",
      description:
        "Security is our top priority. Our API is built with robust security protocols to protect sensitive payment data. With end-to-end encryption and compliance with global security standards, you can be confident that every transaction is safe and secure.",
    },
    {
      id: 3,
      image: notificationImage,
      imageAltText:
        '<a href="https://www.freepik.com/icon/notification_8763138#fromView=search&page=1&position=1&uuid=22891ff7-4e59-4c35-bbdf-6844396e220c">Icon by Freepik</a>',
      title: "Payment Notification",
      description:
        "Stay informed with real-time payment notifications. Our system provides instant updates on payment statuses, enabling you to manage transactions efficiently and provide timely responses to your customers",
    },
    {
      id: 4,
      image: global,
      imageAltText:
        '<a href="https://www.flaticon.com/free-icons/reach" title="reach icons">Reach icons created by smashingstocks - Flaticon</a>',
      title: "Global Reach",
      description:
        "Expand your business globally with our payment gateway that supports multiple currencies and international transactions, allowing you to reach customers around the world effortlessly.",
    },
    {
      id: 5,
      image: easyIntegration,
      imageAltText:
        '<a href="https://www.freepik.com/icon/notification_8763138#fromView=search&page=1&position=1&uuid=22891ff7-4e59-4c35-bbdf-6844396e220c">Icon by Freepik</a>',
      title: "Easy Integration",
      description:
        "Our platform offers easy integration with various e-commerce platforms, shopping carts, and mobile applications. Our detailed documentation and support team ensure a hassle-free setup process.",
    },
    {
      id: 6,
      image: customerSupport,
      imageAltText:
        '<a href="https://www.freepik.com/icon/notification_8763138#fromView=search&page=1&position=1&uuid=22891ff7-4e59-4c35-bbdf-6844396e220c">Icon by Freepik</a>',
      title: "Customer Support",
      description:
        "We provide round-the-clock customer support to assist you with any issues or queries. Our dedicated team is always ready to help you ensure your payment processes run smoothly.",
    },
  ];

  const { fetchData } = useFetchingData('/api/front/payment-feature-showcases')
  console.log(fetchData)

  return (
    <section className="container mx-auto mt-[60px] ">
      <h2 className="text-3xl font-bold flex text-center">
        Why choose our payment system
      </h2>
      <div className="grid lg:grid-cols-3  grid-cols-1 gap-x-4 gap-y-10 mt-12  justify-center mx-auto">
        {fetchData?.map((feature) => (
          <Card
            className="w-full scale-110 lg:scale-100 md:scale-100 lg:w-full md:w-full  mx-auto shadow-lg"
            key={feature.id}
          >
            <CardHeader>
              <Image
                src={process.env.NEXT_PUBLIC_BASE_URL+feature.image}
                alt={feature.image}
                width={100}
                height={100}
                className="w-20 mb-2"
              />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription className="text-justify text-sm">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Features;