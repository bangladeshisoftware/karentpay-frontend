import Image from "next/image";
import img1 from "@/app/_assets/more1.jpg";
import img2 from "@/app/_assets/more2.jpg";
import img3 from "@/app/_assets/more3.jpg";
import Link from "next/link";

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
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Get more from Epayget</h2>
          <Link href="/news" className="text-blue-600 hover:text-blue-700">
            See all
          </Link>
        </div>
        <p className="mt-6 text-xl">
          Become a member of Epayget family and enjoy exclusive features and
          offers that enlighten your business
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {more.map((m) => (
            <div
              className="lg:w-[32.5%] lg:mb-0 mb-6 border rounded-lg shadow-lg"
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
      </div>
    </section>
  );
};
export default GetMore;
