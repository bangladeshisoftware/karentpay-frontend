import React from "react";
import { CgArrowsScrollV } from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
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
    {
      id: 5,
      question:
        "I am a Google Workspace customer, can I sign up for the AI Premium plan?",
      answer:
        "You can create a new page in Next.js by adding a new file in the `pages` directory. The file name will determine the route path.",
    },
    {
      id: 6,
      question:
        "I am a Google Workspace customer, can I sign up for the AI Premium plan?",
      answer:
        "You can create a new page in Next.js by adding a new file in the `pages` directory. The file name will determine the route path.",
    },
    {
      id: 7,
      question:
        "I am a Google Workspace customer, can I sign up for the AI Premium plan?",
      answer:
        "You can create a new page in Next.js by adding a new file in the `pages` directory. The file name will determine the route path.",
    },
    {
      id: 8,
      question:
        "I am a Google Workspace customer, can I sign up for the AI Premium plan?",
      answer:
        "You can create a new page in Next.js by adding a new file in the `pages` directory. The file name will determine the route path.",
    },
  ];
  return (
    <section className="mt-[90px] bg-gradient-to-br from-blue-600  to-blue-800">
      <div className="container mx-auto py-14 text-white ">
        <h2 className="text-4xl font-semi-bold text-center">
          Frequently Asked Question
          <BsFillQuestionOctagonFill className="mx-auto mt-3" fontSize={50} />
        </h2>
        <span></span>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div
              className="shadow-xl rounded-lg p-5 bg-blue-500 my-4"
              key={index}
            >
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
    </section>
  );
};

export default Question;
