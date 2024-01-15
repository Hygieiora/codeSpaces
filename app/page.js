"use client";
import Header from "../app/(components)/header";
import SideBar from "../app/(components)/sidebar";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Signup from "../app/pages/signup/signup";
import Footer from "./(components)/Footer";
// import Connect from "./pages/connect";

export default function Home() {
  return (
    <>
      <Header />
      <Signup />
      <Footer />
    </>
  );
}
