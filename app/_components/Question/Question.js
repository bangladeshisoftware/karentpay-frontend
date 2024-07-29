"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import useFetchingData from '@/lib/useFetchingData';

const Question = () => {
  
  const faqs = [
    {
      id: 1,
      question: 'What payment methods does Karentpay support?',
      answer:
      'Karentpay supports a wide range of payment methods including credit cards, debit cards, digital wallets (such as Apple Pay and Google Wallet), and bank transfers. This flexibility allows you to cater to a broad customer base and enhance their payment experience.'
    },
    {
      id: 2,
      question: "How secure is Karentpay's payment gateway?",
      answer:
        'Security is our top priority at Karentpay. We use advanced encryption, tokenization, and fraud detection technologies to protect sensitive payment data. Our system complies with global security standards such as PCI-DSS, ensuring that every transaction is secure.'
    },
    {
      id: 3,
      question:
        'How can I integrate Karentpay with my website or app?',
      answer:
        'Integrating Karentpay is easy with our comprehensive API and detailed documentation. We provide step-by-step guides and support for various platforms, making the integration process smooth and straightforward. If you encounter any issues, our support team is always ready to assist'
    },
    {
      id: 4,
      question:
        'What currencies does Karentpay support?',
      answer:
        'Karentpay supports multiple currencies, allowing you to accept payments from customers around the world. This feature is particularly beneficial for businesses looking to expand their global reach.'
    },
    {
      id: 5,
      question:
        'Can I receive real-time payment notifications?',
      answer:
        'Yes, Karentpay provides real-time payment notifications. You can receive instant updates on payment statuses via email, SMS, or through our API, enabling you to manage transactions efficiently and provide timely responses to your customers.'
    },
    {
      id: 6,
      question:
        'What are the fees associated with using Karentpay?',
      answer:
        'Karentpay offers competitive and transparent pricing. Our fees vary depending on the payment methods and transaction volumes. For detailed pricing information, please visit our pricing page or contact our sales team.'
    },
    {
      id: 7,
      question:
        'How do I get support if I encounter any issues?',
      answer:
        'Our dedicated support team is available 24/7 to assist you with any issues or questions. You can reach out to us via email, phone, or live chat. Additionally, our extensive knowledge base and community forum are great resources for finding quick solutions.'
    },
    {
      id: 8,
      question:
        'Can I access detailed reports and analytics?',
      answer:
        'Yes, Karentpay provides a comprehensive analytics dashboard. You can track transaction trends, customer behavior, revenue growth, and more. These insights help you make informed decisions and optimize your business strategy.'
    },
    {
      id: 9,
      question:
        'Does Karentpay support recurring payments and subscriptions?',
      answer:
        'Absolutely! Karentpay offers robust support for recurring payments and subscription billing. This feature is perfect for businesses that offer subscription-based services, ensuring a seamless and automated billing process for your customers.'
    },
    {
      id: 10,
      question:
        'How do I get started with Karentpay?',
      answer:
        'Getting started with Karentpay is simple. Sign up on our website to create an account, complete the verification process, and integrate our payment gateway with your platform. If you need any assistance during the setup, our support team is here to help every step of the way.'
    }
  ];

  const  { fetchData } = useFetchingData('/api/front/faqs')
  return (
    <section className='mt-[90px] '>
      <div className='container mx-auto py-14 text-white '>
        <h2 className='text-3xl font-bold text-black text-center'>
          Frequently Asked Question
        </h2>
        <div className='mt-16'>
          {fetchData?.map((faq, index) => (
            <div
              className='shadow-xl scale-105 lg:scale-100 md:scale-100 lg:w-full md:w-full  rounded-lg p-5 bg-gradient-to-r from-blue-600  to-purple-400 my-4 '
              key={index}
            >
              <Accordion
                type='single'
                collapsible
                className='w-full scale-110 lg:scale-100 md:scale-100 lg:w-full md:w-full '
              >
                <AccordionItem value='item-1'>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question