import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/footer";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./utils/scroll-to-top";
import ReduxProvider from "@/app/store/provider";
import { DisplacementSphere } from "./components/sphere-vertex/displacement-sphere";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./mui-theme/theme";
import { LogoLink } from "./components/logo/logo-link";
export const metadata = {
  title: "Portfolio of Thiago Freitas- Software Developer",
  description:
    "This is the portfolio of Thiago. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"font-roboto"}>
        {/* <DisplacementSphere /> */}
        <ToastContainer />
        <main className="overflow-hidden  md:w-full  min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-full xl:max-w-full  2xl:max-w-full text-white">
          <LogoLink />
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <ReduxProvider> {children}</ReduxProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
