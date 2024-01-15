import Footer from "@/app/(components)/Footer";
import Header from "@/app/(components)/header";

export default function Call() {
  return (
    <>
      <Header />
      <h3 className="flex flex-col items-center justify-center">
        This page is dedicated to route calling of professionals and would be
        updated soon.
      </h3>
      <main className="min-h-screen bg-no-repeat bg-cover bg-[url('/screen.png')] pt-10 bg-white">
        <section className="flex flex-col justify-center items-center"></section>
      </main>
      | <Footer />
    </>
  );
}
