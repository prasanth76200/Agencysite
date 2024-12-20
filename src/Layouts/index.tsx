import HeroMarquee from "../components/helper/HeroMarquee";
import Navbar from "../components/homePage/Navbar";
// import Footer from "../components/homePage/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
    <div className="container relative w-full min-h-screen px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      <Navbar />
      <main className="">{children}</main>
     
      {/* <Footer /> */}
    </div>
    <HeroMarquee />
    </div>
  );
};

export default Layout;
