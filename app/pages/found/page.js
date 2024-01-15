"use client";
import Link from "next/link";
import Header from "../../(components)/header";
import SideBar from "../../(components)/sidebar";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
export default function Found() {
  return (
    <>
      <Header />
      <SideBar />
      <main className="min-h-screen md:pl-72 pt-10 bg-white">
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold"> Handsome Musah </h1>
          <img className="w-5 h-5 mt-5" src="/global.jpg" alt="global"></img>
          <img className="w-40 h-50 mt-5" src="/user.png" alt="user"></img>
          <Link href={"/pages/call"}>
            <button className="relative bg-blue-700 rounded-[80px] w-60 flex flex-row items-center mt-10 justify-center p-4 text-white box-border text-center text-[20]">
              <div className="relative">Talk to Musah</div>
            </button>
          </Link>
          <span className="text-[10px] flex mt-10">
            Filter search by gender:
            <ChevronDownIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </span>
        </section>
      </main>
    </>
  );
}
