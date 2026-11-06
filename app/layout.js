import Footer from "./components/footer";
import ScrollProgress from "./components/helper/scroll-progress";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import { personalData } from "@/utils/data/personal-data";
import "./css/card.scss";
import "./css/globals.scss";

export const metadata = {
  title: `${personalData.fullName} | ${personalData.designation}`,
  description: personalData.description,
};

export const viewport = {
  themeColor: "#0d1224",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ScrollProgress />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
