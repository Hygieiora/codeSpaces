"use client";
import Header from "../../app/(components)/header";
import { useRouter } from "next/navigation";
import Header from "../(components)/header";
import Footer from "../(components)/Footer";

export default function CenteredChat() {
  const navigation = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to the call.js page
    navigation.push("/pages/call");
  };

  return (
    <>
      <Header />
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <h4>Hi, how are you feeling today?</h4>
        <div className="relative rounded-lg shadow-lg p-6 bg-white w-96">
          <p className="text-gray-700 font-poppins text-sm mb-4">
            Let&apos;s connect you to a professional.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex items-center border rounded-full px-3 py-1"
          >
            <input
              className="flex-grow text-sm text-gray-700 placeholder-gray-400 outline-none"
              type="text"
              placeholder="Type something here"
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-700 rounded-full p-2 ml-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
