import React from "react";
import {
  HelpCircle,
  Target,
  Rocket,
  MessageCircleQuestion,
  PhoneCall,
  Info,
} from "lucide-react";
import FAQItem from "./FAQItem";

const Faqs = () => {
  const faqData = [
    {
      question: "What is our mission?",
      answer:
        "Our mission is to simplify the search for student accommodations across countries by providing reliable, convenient, and affordable housing solutions tailored to meet the needs of students worldwide.",
      icon: Target,
    },
    {
      question: "How do we work?",
      answer:
        "We partner with trusted property providers worldwide to offer diverse student accommodations. Our platform lets students search, compare, and book their ideal housing easily.",
      icon: Rocket,
    },
    {
      question: "What services do we offer?",
      answer:
        "We provide a variety of student accommodations, including shared apartments, studios, and private rooms. Our services also include 24/7 support and assistance in finding options that match your needs and budget.",
      icon: MessageCircleQuestion,
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team through the contact form on our website or via email at Hello@studynests.com . For instant assistance, use our 24/7 live chat or WhatsApp support.",
      icon: PhoneCall,
    },
  ];

  return (
    <div className="w-full mx-auto px-4 py-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden bg-offwhite border-pink">
      {/* Background decorative icon */}
      <div className="absolute -top-10 -right-10 opacity-10 transform rotate-12">
        <HelpCircle size={200} className="text-voilet" />
      </div>

      <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center space-x-4 transition-all duration-300 hover:text-opacity-80 text-voilet">
        <Info size={36} className="text-blue" />
        <span>Frequently Asked Questions</span>
      </h2>

      <div className="space-y-4 relative z-10 px-4 md:px-16 lg:px-36 xl:px-52 2xl:px-80">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            icon={faq.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
