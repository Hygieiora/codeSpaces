"use client";
// import Header from "app/(components)/header.js";
import SideBar from "app/(components)/sidebar.js";
// import ChevronDownIcon from "@mui/icons-material/ChevronDown";
const itemList = [
  {
    label: "Gender",
  },
  {
    label: "Age",
  },
  {
    label: "Condition",
  },
  {
    label: "Location",
  },
  {
    label: "Price",
  },
];

const sections = [
  {
    id: 1,
    title: "Book now",
    imageUrl: "https://source.unsplash.com/100x100/?portrait",
    name: "Handsome Musah",
    role: "Psychologist",
    locationIcon: "/location.png",
    location: "Cape Coast",
    availability: "weekends",
    rate: "$10/hr",
  },
  {
    id: 1,
    title: "Book now",
    imageUrl: "https://source.unsplash.com/100x100/?portrait",
    name: "Handsome Musah",
    role: "Psychologist",
    locationIcon: "/location.png",
    location: "Cape Coast",
    availability: "weekends",
    rate: "$10/hr",
  },
  {
    id: 1,
    title: "Book now",
    imageUrl: "https://source.unsplash.com/100x100/?portrait",
    name: "Handsome Musah",
    role: "Psychologist",
    locationIcon: "/location.png",
    location: "Cape Coast",
    availability: "weekends",
    rate: "$10/hr",
  },
  {
    id: 1,
    title: "Book now",
    imageUrl: "https://source.unsplash.com/100x100/?portrait",
    name: "Handsome Musah",
    role: "Psychologist",
    locationIcon: "/location.png",
    location: "Cape Coast",
    availability: "weekends",
    rate: "$10/hr",
  },
  {
    id: 1,
    title: "Book now",
    imageUrl: "https://source.unsplash.com/100x100/?portrait",
    name: "Handsome Musah",
    role: "Psychologist",
    locationIcon: "/location.png",
    location: "Cape Coast",
    availability: "weekends",
    rate: "$10/hr",
  },
  {
    id: 1,
    title: "Book now",
    imageUrl: "https://source.unsplash.com/100x100/?portrait",
    name: "Handsome Musah",
    role: "Psychologist",
    locationIcon: "/location.png",
    location: "Kasoa",
    availability: "weekday",
    rate: "$10/hr",
  },
  {
    id: 1,
    title: "Book now",
    imageUrl: "https://source.unsplash.com/100x100/?portrait",
    name: "Handsome Musah",
    role: "Psychologist",
    locationIcon: "/location.png",
    location: "Kasoa",
    availability: "weekday",
    rate: "$10/hr",
  },
  {
    id: 1,
    title: "Book now",
    imageUrl: "https://source.unsplash.com/100x100/?portrait",
    name: "Handsome Musah",
    role: "Psychologist",
    locationIcon: "/location.png",
    location: "Cape Coast",
    availability: "weekends",
    rate: "$10/hr",
  },
];

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <SideBar />
      <main className="min-h-screen md:pl-72 pt-10 bg-white">
        <nav className="w-full flex flex-col  items-center md:flex-row justify-center md:justify-between">
          <div className="md:flex items-center">
            {itemList.map((item, index) => (
              <ul key={index} className="flex items-center">
                <li>{item.label}</li>
                {/* <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400 md:mr-3"
                  aria-hidden="true"
                /> */}
              </ul>
            ))}
          </div>
          <div className="pt-2 relative text-gray-600 md:pt-0">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pl-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
        </nav>

        {/* body aspect */}
        <div className="grid md:grid-cols-2  place-content-center  gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <a href="/pages/call" key={section.id}>
              <section className="card p-4 w-60 h-80 mt-10 bg-white rounded-2xl border border-blue-700 shadow-lg">
                <div className="text-amber-500 text-xs font-bold text-right underline leading-relaxed">
                  {section.title}
                </div>
                <Image
                  className="w-24 h-24 rounded-full mx-auto mt-2"
                  src={section.imageUrl}
                  width={91}
                  height={96}
                  alt="Portrait"
                />
                <div className="text-black text-xl font-bold font-inter mt-2 text-center">
                  {section.name}
                </div>
                <div className="text-black text-opacity-60 text-lg font-normal font-poppins leading-relaxed text-center">
                  {section.role}
                </div>
                <Image
                  className="w-6 h-6 mx-auto mt-1"
                  src={section.locationIcon}
                  width={25}
                  height={25}
                  alt="Location Icon"
                />
                <div className="text-black text-base font-normal font-poppins leading-relaxed text-center">
                  {section.location}
                </div>
                <div className="mt-1 text-center">
                  <span className="text-black text-opacity-60 text-base font-normal font-poppins leading-relaxed">
                    Availability:{" "}
                  </span>
                  <span className="text-black text-base font-normal font-poppins leading-relaxed">
                    {section.availability}
                  </span>
                </div>
                <div className="text-green-800 text-base font-bold font-inter mt-1 text-center">
                  {section.rate}
                </div>
              </section>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
