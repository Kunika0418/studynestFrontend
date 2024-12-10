import React from "react";

import collegeStudents from "../../../assets/images/college_students.jpg";
import hostel from "../../../assets/images/hostel.jpg";
import safety from "../../../assets/images/safety.jpg";
import support from "../../../assets/images/support.jpg";
import closeUniversity from "../../../assets/images/close_university.jpg";

const WhyWe = () => {
  const data = [
    {
      img: hostel,
      title: "Comfortable Accommodations",
      description:
        "We help you find a cozy home where you can thrive, making academic success easier!",
    },
    {
      img: closeUniversity,
      title: "Stay Close to University",
      description:
        "Save time and energy with housing near campus, ensuring convenience and focus on your education.",
    },
    {
      img: safety,
      title: "Guarantee of Safety",
      description:
        "We list trusted options with premium features, offering peace of mind and a secure living experience.",
    },
    {
      img: support,
      title: "Round-the-Clock Support",
      description:
        "Our 24/7 support team is here to assist you with any concerns, ensuring your stay is seamless",
    },
  ];

  return (
    <>
      <div className="max-w-full h-[35rem] bg-accent-100 relative flex justify-center items-center">
        <div className="h-full w-full absolute top-0 left-0 overflow-hidden z-0">
          <img
            src={collegeStudents}
            className="h-full w-full object-cover absolute"
          />
        </div>
        <div className="h-full w-full bg-voilet/80 bg-opacity-50 absolute z-0"></div>
        <div className="flex flex-col justify-center items-center h-full w-full gap-6 mb-28 z-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-3xl font-semibold font-sans text-white">
              Why Are We the Top Choice of Students Looking for
            </h2>
            <h2 className="text-3xl font-extrabold font-sans text-pink">
              Accommodations Near University?
            </h2>
          </div>
          <div className="text-base font-sans text-white">
            Finding{" "}
            <span className="font-semibold underline underline-offset-4">
              student housing near you
            </span>{" "}
            is effortless with Universal Student Homes. We strive to provide
            comfort, convenience, and a secure living environment!
          </div>
        </div>
        <div className="w-fit h-auto bg-white absolute -bottom-60 rounded-lg flex flex-row items-center justify-center border border-voilet gap-4">
          {data.map((item, index) => {
            return (
              <div
                key={index+1}
                className="h-full w-72 flex flex-col justify-center items-center gap-2 p-8  border-none cursor-pointer relative group hover:-translate-y-2 transition-transform duration-500 ease-in-out"
              >
                <div className="h-44 w-56 bg-slate-300 overflow-hidden rounded-lg">
                  <img src={item.img} className="h-full w-full object-cover" alt="error occured"/>
                </div>
                <h3 className="font-sans font-semibold text-pink">{item.title}</h3>
                <span className="text-justify text-sm text-voilet">
                  {item.description}
                </span>
                <div className="w-56 h-[0.2rem] bg-voilet shadow-lg opacity-0 group-hover:opacity-100 shadow-pink absolute bottom-4 traslate-y-0 group-hover:-translate-y-2 transition duration-500 ease-in-out"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WhyWe;
