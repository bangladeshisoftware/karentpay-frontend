"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useFetchingData from "@/lib/useFetchingData";

const Question = () => {
  const { fetchData } = useFetchingData("/api/front/faqs");

  return (
    <section className="mt-[90px] ">
      <div className="container mx-auto pt-14 text-white ">
        <h2 className="text-3xl font-bold text-black text-center">
          Frequently Asked Question
        </h2>
        <div className="mt-16">
          {fetchData && fetchData.length > 0
            ? fetchData.map((faq, index) => (
                <div
                  className="shadow-xl scale-105 lg:scale-100 md:scale-100 lg:w-full md:w-full rounded-lg p-5 bg-gradient-to-r from-blue-600 to-purple-400 my-4"
                  key={index}
                >
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full scale-110 lg:scale-100 md:scale-100 lg:w-full md:w-full"
                  >
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))
            : Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="shadow-xl scale-105 lg:scale-100 md:scale-100 lg:w-full md:w-full rounded-lg p-5 py-7 my-4 animate-pulse bg-gray-50"
                  key={index}
                >
                  <div className="h-6 bg-gray-200 rounded mb-4 w-full"></div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Question;
