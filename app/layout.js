import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "app/(components)/header";
// import Footer from "app/(components)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hygieiora",
  description: "Conversations that heal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
