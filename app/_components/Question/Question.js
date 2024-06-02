import React from "react";
import { CgArrowsScrollV } from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Question = () => {
  const faqs = [
    {
      id: 1,
      question: "What is included in Google One AI Premium plan?",
      answer:
        "Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.",
    },
    {
      id: 2,
      question: "What is Gemini Advanced?",
      answer:
        "You can create a new page in Next.js by adding a new file in the `pages` directory. The file name will determine the route path.",
    },
    {
      id: 3,
      question:
        "Can I share the AI benefits included in the Google One AI Premium plan",
      answer:
        "You can create a new page in Next.js by adding a new file in the `pages` directory. The file name will determine the route path.",
    },
    {
      id: 4,
      question:
        "I am a Google Workspace customer, can I sign up for the AI Premium plan?",
      answer:
        "You can create a new page in Next.js by adding a new file in the `pages` directory. The file name will determine the route path.",
    },
  ];
  return (
    <section className="mt-[90px]">
      <div className="container mx-auto   ">
        <h2 className="text-4xl font-semi-bold text-center">
          Frequently Asked Question
        </h2>
        <div>
          <div className="flex justify-end w-full items-center text-[#2563EB] py-4">
            <p className="cursor-pointer">Expand all</p>
            <CgArrowsScrollV fontSize={20} />
          </div>
          <div>
            {faqs.map((faq, index) => (
              <div key={index}>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
