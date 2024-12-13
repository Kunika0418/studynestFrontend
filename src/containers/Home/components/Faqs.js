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
        "Our mission is to provide innovative solutions that make a difference in people's lives.",
      icon: Target,
    },
    {
      question: "How do we work?",
      answer:
        "We collaborate closely with our clients, using cutting-edge technology and creative thinking to solve complex challenges.",
      icon: Rocket,
    },
    {
      question: "What services do we offer?",
      answer:
        "We offer a wide range of services including consulting, software development, design, and strategic planning.",
      icon: MessageCircleQuestion,
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via email at support@example.com or call our helpline at 1-800-HELP-NOW.",
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
