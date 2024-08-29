import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import ReduxProvider from "@/store/provider";
import { DisplacementSphere } from "./components/sphere-vertex/displacement-sphere";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Thiago Freitas- Software Developer",
  description:
    "This is the portfolio of Thiago. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <DisplacementSphere /> */}
        <ToastContainer />
        <main className="overflow-hidden  md:w-full  min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-full xl:max-w-full  2xl:max-w-full text-white">
          <Navbar />
          <ReduxProvider> {children}</ReduxProvider>
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
