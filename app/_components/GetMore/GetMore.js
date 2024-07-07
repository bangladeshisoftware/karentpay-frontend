import Image from "next/image";
import img1 from "@/app/_assets/more1.jpg";
import img2 from "@/app/_assets/more2.jpg";
import img3 from "@/app/_assets/more3.jpg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const GetMore = () => {
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
  ];

  return (
    <section className="mt-[70px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-0">
            Get more from Karentpay
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
        <div className="flex flex-wrap gap-4 gap-y-10 justify-center md:justify-between  mt-10">
          {more.map((m) => (
            <div
              className="w-full scale-110 lg:scale-100 md:scale-100  md:w-[48%] lg:w-[32.5%]  mb-6 border rounded-lg shadow-lg"
              key={m.id}
            >
              <div className="h-full bg-white rounded-md">
                <Image
                  alt="testimonial"
                  className="w-full h-auto mb-8 object-cover object-center inline-block rounded-t-lg"
                  src={m.image}
                  width={400}
                  height={300}
                  priority
                />
                <div className="px-4 pb-10">
                  <h2 className="font-bold text-lg">{m.title}</h2>
                  <p className="">{m.description}</p>
                  <Link
                    href={m.link}
                    className="block w-fit mt-3 px-6 py-2 rounded bg-blue-600 text-white text-sm"
                  >
                    View Details
                  </Link>
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
