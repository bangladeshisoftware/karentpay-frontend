import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
// import Autoplay from 'embla-carousel-autoplay';
// import Fade from 'embla-carousel-fade';
import img1 from '@/app/_assets/1.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Slider = () => {
  return (
    <Carousel
      className='w-full'
      opts={{ loop: true }}
      //   plugins={[Autoplay({ delay: 3000, stopOnInteraction: false }), Fade()]}
    >
      <CarouselContent>
        <CarouselItem className='p-0 relative'>
          <Image src={img1} alt='' className='w-full' />
          <div className='absolute top-[12rem] left-[24rem] w-1/4'>
            <h2 className='text-5xl text-white'>
              No. 1 Payment Gateway Solution
            </h2>
            <div className='flex gap-4 w-fit mt-2'>
              <Link href='/auth/signup'>
                <Button className='bg-blue-800'>Get Started</Button>
              </Link>
              <Link href='/auth/signup'>
                <Button className='bg-blue-800'>Contact Us</Button>
              </Link>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
export default Slider;
