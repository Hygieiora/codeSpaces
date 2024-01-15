"use client";

import Image from "next/image";
import cover from '../public/banner-2.jpg'
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from '../../(components)/Header.jsx'
import Sidebar from '../../(components)/Sidebar.jsx'
import Footer from '../../(components)/Footer.jsx'

const appointment = () => {
  const handleSubmit = () => {
    console.log("Appointment selected","Date:",selectedDate,"Time:",selectedTime,"Mode:",selectedOption);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month" && (date.getDay() === 0 || date.getDay() === 6)) {
      return "weekend";
    }
    return null;
  };

  const doctorData = {
    cover_image: "",
    profile_image: "",
    name: "Dr Kofi Agyemang",
    reviews: "100",
    hourly_rate: "10",
    about:
      "Licensed Clinical Psycologist with 3 years of experience councelling at-risk students. Seeking to improve Patient care at Pediatric Psychological Services. At LCISD, developed mentoring program linking 30+ students per year with career professions.",
    lincense: "Board Certified Clinical Psychologist, Capecoast, Ghana",
  };

  const handleDateChange=(date)=>{
    setSelectedDate(date)
  }
  const handleBack=()=>{
    

  }
  const availableTimes = ["8 : 30 am - 10 : 30 am","10 : 30 am - 12 : 30 pm","2 : 30 pm - 4 : 30 pm","4 : 30 pm - 6 : 30 pm",] 
  
  const [selectedDate, setSelectedDate] = useState(null)
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null)
  const [isTimeOpen, setIsTimeOpen] = useState(false)

  const online = true;

  return (
    <div className="mx-4 my-2 mb-10">
    <Header />
      <div className="flex">
        <div className="h-screen hidden lg:flex w-1/5">
          <Sidebar sidebarOpen={true}/>
        </div>
        <div className="w-full lg:w-4/5 flex flex-col">
          <div className="relative mt-4">
            <div onClick={handleBack} className="w-9 h-10 rounded-full bg-white absolute top-1 left-1 items-center mx-auto my-auto flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </div>
            <Image
              height={400}
              width={1200}
              src={cover}
              className="object-cover object-top"
            />
            <div className="absolute bottom-0 left-[33%] md:left-[45%] transform translate-y-1/2">
              <Image
                height={100}
                width={100}
                src="https://th.bing.com/th/id/R.775e040fd1fd41e3a7ed491ae44a7157?rik=Mc4EVXRCFGfPNw&pid=ImgRaw&r=0"
                className=" object-cover object-center h-50 w-50 rounded-full order-4 border-white bg-slate-400"
              />
              {online && (
                <div className="w-4 h-4 rounded-full bg-green-600 absolute top-3/4 left-3/4 border-2 border-white"></div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center mt-16">
            <h1>{doctorData.name}</h1>
            <span className="text-slate-500">Psycologist</span>
            <div className="flex">
              <p className="text-slate-800"> (100 reviews)</p>{" "}
              <p className="text-green-600 ml-2">{doctorData.hourly_rate}/hr</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col">
            <h1 className="flex justify-center font-bold text-xl">About</h1>
            <p className="mt-5 text-">{doctorData.about}</p>
          </div>
          <div className="mt-7">
            <Motivation />
          </div>
          <div className="mt-7">
            <CustomCalendar tileClassName={tileClassName} handleDateChange={handleDateChange} selectedDate={selectedDate}/>
          </div>
          <div className="flex justify-center mt-5 ">
            <TimeSelect availableTimes={availableTimes} selectedTime={selectedTime} setSelectedTime={setSelectedTime} isTimeOpen={isTimeOpen} setIsTimeOpen={setIsTimeOpen}/>
          </div>
          <div className="flex justify-center mt-5 ">
            <DropDown isOpen={isOpen} setIsOpen={setIsOpen} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
          </div>
          <div className="flex justify-center mt-5 ">
            <button
              className="w-64 rounded-lg p-1 text-center flex justify-center text-xl text-white bg-blue-700"
              onClick={handleSubmit}
            >
              {" "}
              Book Consultation{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default appointment;

export const Motivation = () => {
  return (
    <div>
        <h1 className='font-bold text-lg flex justify-center mb-5'> Motivation </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-yellow-200 rounded-lg px-2">
          <p className="py-5 flex justify-end ">Last read: {"2 mins ago"}</p>
          <hr className="border-b border-black" />
          <p className="my-2">Never give up on yourself</p>
          <hr className="border-b border-black" />
          <p className="my-2">Keep fighting and Keep Pushing</p>
          <hr className="border-b border-black" />
          <p className="my-2">for a better You</p>
        </div>
        <div className="bg-yellow-200 rounded-lg px-2">
          <p className="py-5 flex justify-end ">Last read: {"2 mins ago"}</p>
          <hr className="border-b border-black" />
          <p className="my-2">Never give up on yourself</p>
          <hr className="border-b border-black" />
          <p className="my-2">Keep fighting and Keep Pushing</p>
          <hr className="border-b border-black" />
          <p className="my-2">for a better You</p>
        </div>
        <div className="bg-yellow-200 rounded-lg px-2">
          <p className="py-5 flex justify-end ">Last read: {"2 mins ago"}</p>
          <hr className="border-b border-black" />
          <p className="my-2">Never give up on yourself</p>
          <hr className="border-b border-black" />
          <p className="my-2">Keep fighting and Keep Pushing</p>
          <hr className="border-b border-black" />
          <p className="my-2">for a better You</p>
        </div>
        <div className="bg-yellow-200 rounded-lg px-2">
          <p className="py-5 flex justify-end ">Last read: {"2 mins ago"}</p>
          <hr className="border-b border-black" />
          <p className="my-2">Never give up on yourself</p>
          <hr className="border-b border-black" />
          <p className="my-2">Keep fighting and Keep Pushing</p>
          <hr className="border-b border-black" />
          <p className="my-2">for a better You</p>
        </div>
      </div>
    </div>
  );
};

export const DropDown = ({isOpen, setIsOpen, selectedOption, setSelectedOption}) => {
  return (
    <div className="relative w-3/5 md:w-2/5 flex flex-col justify">
        <h1 className='font-bold text-lg mb-5'>Preferred Mode </h1>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className=" text-gray-800 font-bold py-2 px-4 inline-flex items-center bg-slate-300 rounded-sm justify-between w-full"
      >
        <span className="">channel...</span>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="mt-[1.5] py-2 flex flex-col">
          <a
            onClick={() => setSelectedOption("video")}
            className={`rounded mt-1 p-2 w-full px-1 flex ${
              selectedOption == "video" ? "bg-blue-300" : "bg-slate-200"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
            </svg>
                <span className="ml-3">Video</span>
          </a>
          <a
            onClick={() => setSelectedOption("text")}
            className={`rounded mt-1 p-2 w-full px-1 flex ${
              selectedOption == "text" ? "bg-blue-300" : "bg-slate-200"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
            </svg>
                <span className="ml-3">Text</span>
          </a>
          <a
            onClick={() => setSelectedOption("phone_call")}
            className={`rounded mt-1 p-2 w-full px-1 flex ${
              selectedOption == "phone_call" ? "bg-blue-300" : "bg-slate-200"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
            </svg>
                <span className="ml-3">Phone Call</span>
          </a>
        </div>
      )}
    </div>
  );
};

export const CustomCalendar = ({tileClassName,handleDateChange, selectedDate}) => {

    return (
      <div className="max-w-xs mx-auto mt-8">
        <h1 className='font-bold text-lg mb-5'> Availability </h1>
        <Calendar tileClassName={tileClassName} onChange={handleDateChange} value={selectedDate}/>
      </div>
    );
  };

  export const TimeSelect = ({availableTimes, selectedTime, setSelectedTime, isTimeOpen, setIsTimeOpen}) => {

    return (
        <div className="relative w-3/5 md:w-2/5 flex flex-col justify">
        <h1 className='font-bold text-lg mb-5'> Select Time </h1>
        <button
          onClick={() => {
            setIsTimeOpen(!isTimeOpen);
          }}
          className=" text-gray-800 font-bold py-2 px-4 inline-flex items-center bg-slate-300 rounded-sm justify-between w-full"
        >
          <span className="">time...</span>
          {isTimeOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </button>
        {isTimeOpen && (
          <div className="mt-[1.5] py-2 flex flex-col">
            {availableTimes && availableTimes.map((item,index)=>(
               <a
               key={index}
               onClick={() => setSelectedTime(item)}
               className={`rounded mt-1 p-2 w-full justify-between px-1 flex ${
                 selectedTime == `${item}` ? "bg-blue-300" : "bg-slate-200"
               }`}
             >
               <span>{item}</span>
 
             </a> 
            ))}
            
          </div>
        )}
      </div>
    )
  }
  
