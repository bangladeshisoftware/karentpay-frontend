import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
// import Autoplay from 'embla-carousel-autoplay';
// import Fade from 'embla-carousel-fade';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import img1 from '@/app/_assets/Homepage Slider.webp';

const Slider = () => {
  const sliders = [
    {
      id: 1,
      image: img1,
      title: 'Automatic Payment Gateway Solution Instant Withdraw',
      firstButtonLink: '/auth/signup',
      firstButtonText: 'Free Appointment Book',
      secondButtonLink: '/',
      secondButtonText: 'Contact Sales Team'
    },
    {
      id: 2,
      image: img1,
      title: 'Automatic Payment Gateway Solution Instant Withdraw',
      firstButtonLink: '/auth/signup',
      firstButtonText: 'Free Appointment Book',
      secondButtonLink: '/',
      secondButtonText: 'Contact Sales Team'
    }
  ];
  return (
    <Carousel
      className='relative'
      opts={{ loop: true }}
      //   plugins={[Autoplay({ delay: 3000, stopOnInteraction: false }), Fade()]}
    >
      <CarouselContent>
        {sliders?.map((slider) => (
          <CarouselItem className='p-0 relative' key={slider.id}>
            <Image
              src={slider.image}
              alt=''
              className='w-full lg:h-[580px] wide-laptop:h-[480px] small-laptop:h-[380px] h-[200px]'
              width={'100%'}
              height={'580px'}
            />
            <div className='absolute lg:top-[12rem] wide-laptop:top-[12rem] small-laptop:top-[7rem] top-[4rem] lg:left-[19rem] wide-laptop:left-[4.5rem] small-laptop:left-[3rem] left-[3em]'>
              <h2 className='lg:text-5xl text-white lg:w-[60%] font-bold w-[60%]'>
                {slider.title}
              </h2>
              <div className='flex lg:flex-row wide-laptop:flex-row small-laptop:flex-row flex-col lg:gap-4 wide-laptop:gap-4 small-laptop:gap-4 gap-2 lg:mt-5 mt-2'>
                <Link href={slider.firstButtonLink}>
                  <Button className='bg-pink-600 px-12 py-6 text-base'>
                    {slider.firstButtonText}
                  </Button>
                </Link>
                <Link href={slider.secondButtonLink}>
                  <Button className='bg-pink-600 px-12 py-6 text-base'>
                    {slider.secondButtonText}
                  </Button>
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute lg:top-[17rem] wide-laptop:top-[12rem] small-laptop:top-[11.5rem] top-[6rem] small-laptop:left-[1rem] lg:left-[3rem] opacity-30 hover:opacity-100' />

      <CarouselNext className='absolute lg:top-[17rem] wide-laptop:top-[12rem] small-laptop:top-[11.5rem] top-[6rem] small-laptop:right-[1rem] lg:right-[3rem] opacity-30 hover:opacity-100' />
    </Carousel>
  );
};
export default Slider;