import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Image from 'next/image';

const Feature = ({ title, description, image, imageAltText }) => {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <Image src={image} alt={imageAltText} className='w-20 mb-2' />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
export default Feature;
