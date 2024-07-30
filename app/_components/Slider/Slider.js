
"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import img1 from '@/app/_assets/Homepage Slider.webp';
import useFetchingData from '@/lib/useFetchingData';

const Slider = () => {
/*   const sliders = [
    {
      id: 1,
      image: img1,
      title: (
        <>
          Automatic Payment Gateway<br /> Solution

          Instant Withdraw
        </>
      ),
      firstButtonLink: '/auth/login',
      firstButtonText: 'Become a Merchant',
      secondButtonLink: '/contact',
      secondButtonText: 'Contact'
    },
    {
      id: 2,
      image: img1,
      title: (
        <>
          Automatic Payment Gateway <br /> Solution

          Instant Withdraw
        </>
      ),
      firstButtonLink: '/auth/login',
      firstButtonText: 'Become a Merchant',
      secondButtonLink: '/contact',
      secondButtonText: 'Contact '
    }
  ]; */

  const { fetchData } = useFetchingData("/api/front/home-image-sliders")
  console.log(fetchData);

  return (
    <div className="relative">
      <Carousel className='relative' opts={{ loop: true }}>
        <CarouselContent>
          {fetchData?.map((slider, index) => (
            <CarouselItem className='p-0 relative' key={index}>
              <Image
                src={slider.BannerImage}
                alt=''
                className='w-full h-[60vh]'
                width={1000}
                height={700}
                style={{ objectFit: 'cover' }}
              />
              <div className='absolute inset-0 flex items-center px-4 sm:px-8 lg:px-16'>
                <div className='container mx-auto'>
                  <h2 className='text-white font-bold lg:w-[60%] text-2xl sm:text-2xl md:text-2xl lg:text-5xl mb-2 sm:mb-4 lg:mb-6 mt-2 sm:mt-10 lg:mt-6'>
                    {slider.BannerText}
                  </h2>
                  <div className='hidden sm:flex flex-row  lg:flex-row items-center gap-2 sm:gap-4 sm:flex-col md:flex-col'>
                    <Link href="http://karentpay-api.test">
                      <Button className='bg-pink-600 px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg'>
                        {slider.ButtonText1}
                      </Button>
                    </Link>
                    <Link href="http://karentpay-api.test">
                      <Button className='bg-pink-600 px-16 py-1 text-xs sm:px-12 sm:py-2 sm:text-sm md:px-16 md:py-3 md:text-base lg:px-16 lg:py-4 lg:text-lg'>
                        {slider.ButtonText2}
                      </Button>
                    </Link>
                  </div>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-4 lg:left-12 opacity-30 hover:opacity-100' />
        <CarouselNext className='absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4 lg:right-12 opacity-30 hover:opacity-100' />
      </Carousel>

      {/* <div className="block sm:hidden mt-4 text-center">
        <div>
          <div className="flex flex-col items-center gap-2 mx-auto">
            <div className="flex flex-row gap-2 ">
              <Link href={sliders[0].firstButtonLink}>
                <Button className='bg-pink-600 px-4 py-2 text-sm w-full'>
                  {sliders[0].firstButtonText}
                </Button>
              </Link>
              <Link href={sliders[0].secondButtonLink}>
                <Button className='bg-pink-600 px-12 py-2 text-sm w-full'>
                  {sliders[0].secondButtonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Slider;
