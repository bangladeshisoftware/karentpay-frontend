import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.'
    },
    {
      id: 2,
      question: 'Is it styled?',
      answer:
        ' Yes. It comes with default styles that matches the other components aesthetic.'
    },
    {
      id: 3,
      question: 'Is it animated??',
      answer:
        "Yes. It's animated by default, but you can disable it if you prefer."
    }
  ];
  return (
    <section className='container mt-12'>
      <div className='grid lg:grid-cols-2 grid-cols-1 items-center lg:justify-between justify-center'>
        <div className='lg:w-full w-fit mx-auto'>
          <h2 className='text-3xl font-bold'>Frequently asked questions</h2>
          <FontAwesomeIcon
            icon={faPersonCircleQuestion}
            className='w-36 h-36 ml-36'
          />
        </div>
        <Accordion type='single' collapsible className='w-full'>
          {faqs.map((faq) => (
            <AccordionItem value={faq.id} key={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
export default FAQ;
