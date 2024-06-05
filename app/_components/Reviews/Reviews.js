import Image from 'next/image';
import img1 from '@/app/_assets/r1.jpg';
import img2 from '@/app/_assets/r2.jpg';
import img3 from '@/app/_assets/r3.jpg';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      image: img1,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: 'ALPER KAMU',
      designation: 'UI Developer'
    },
    {
      id: 2,
      image: img2,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: 'David Kameron',
      designation: 'Frontend Developer'
    },
    {
      id: 3,
      image: img3,
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: 'Lomer Smith',
      designation: 'Businessman'
    }
  ];

  return (
    <section className='mt-[70px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between items-center md:items-start'>
          <h2 className='text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-0'>
            Customer Reviews
          </h2>
          <Link
            href='/customer-reviews'
            className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center gap-1 w-fit text-sm'
          >
            Show more <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
        <div className='flex flex-wrap gap-4 justify-center mt-10'>
          {reviews.map((review) => (
            <div
              className='w-full md:w-[48%] lg:w-[32.5%] mb-6 p-4 border rounded-lg shadow-lg'
              key={review.id}
            >
              <div className='h-full text-center'>
                <Image
                  alt='testimonial'
                  className='w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                  src={review.image}
                  width={200}
                  height={200}
                  priority
                />
                <p className='leading-relaxed text-sm sm:text-base md:text-sm lg:text-base'>
                  {review.description}
                </p>
                <span className='inline-block h-1 w-10 rounded bg-blue-600 mt-6 mb-4'></span>
                <h2 className='text-gray-900 font-bold title-font tracking-wider text-sm'>
                  {review.name}
                </h2>
                <p className='text-gray-500'>{review.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Reviews;
