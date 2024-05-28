import Feature from '@/app/_components/Features/Feature';
import flexibilityImage from '@/app/_assets/yay.png';
import secureApiImage from '@/app/_assets/secure.png';
import notificationImage from '@/app/_assets/notification.png';

const Features = () => {
  const features = [
    {
      id: 1,
      image: flexibilityImage,
      imageAltText:
        '<a href="https://www.freepik.com/icon/watchmaking_1459336#fromView=search&page=1&position=21&uuid=7c6e299c-8cfc-46f5-9ea8-5a05df83b75e">Icon by Flat-icons-com</a>',
      title: 'Flexibility',
      description:
        'Moneybag accepts, verifies, and processes a variety of transactions. Payments may be made via: Credit/Debit Cards...'
    },
    {
      id: 2,
      image: secureApiImage,
      imageAltText:
        '<a href="https://www.freepik.com/icon/shield_1161388#fromView=search&page=1&position=1&uuid=2e3a143b-b064-4569-915d-127d3d9fc968">Icon by Freepik</a>',
      title: 'Secure API',
      description:
        'Moneybag connects merchants via a secure payment pages, forms or payment APIs. Moneybag also has the ability to...'
    },
    {
      id: 3,
      image: notificationImage,
      imageAltText:
        '<a href="https://www.freepik.com/icon/notification_8763138#fromView=search&page=1&position=1&uuid=22891ff7-4e59-4c35-bbdf-6844396e220c">Icon by Freepik</a>',
      title: 'Payment Notification',
      description:
        'Moneybag provides instant Payment Notifications, In-App Notifications, SMS Notifications, and Email Notifications...'
    }
  ];

  return (
    <section className='container mx-auto mt-8'>
      <h2 className='text-3xl font-bold text-center'>
        Why choose our payment system
      </h2>
      <div className='grid wide-desktop:grid-cols-3 wide-laptop:grid-cols-3 small-laptop:grid-cols-3 grid-cols-1 gap-4 mt-6'>
        {features.map((feature) => (
          <Feature
            key={feature.id}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};
export default Features;
