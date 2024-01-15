import SideBar from "@/app/(components)/sidebar";
import Footer from "/app/(components)/Footer";
import Header from "/app/(components)/header";
// import Link from "next/link";
// import Header from "@/app/(components)/header";

export default function Symptoms() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="relative rounded-lg shadow-lg p-6 bg-white w-96">
          <h4 text-xl flex flex-col items-center justify-center>
            Hi, how are you feeling today?
          </h4>
          <p className="text-gray-700 font-poppins text-sm mb-4">
            Let&apos;s connect you to a professional.
          </p>
          <form
            // onSubmit={handleSubmit}
            className="flex items-center border rounded-full px-3 py-1"
          >
            <input
              className="flex-grow text-sm text-gray-700 placeholder-gray-400 outline-none"
              type="text"
              placeholder="Type something here"
            />
            <button
              //   href="pages/call"
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-700 rounded-full p-2 ml-2"
            >
              <a href="/pages/therapists">Send</a>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
