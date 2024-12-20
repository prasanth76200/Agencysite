import HeroMarquee from "../components/helper/HeroMarquee";
import Navbar from "../components/homePage/Navbar";
import StorySection from "../components/homePage/Story-Section";
// import Footer from "../components/homePage/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
    <div className="container relative w-full min-h-screen px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[98rem] text-white">
      <Navbar />
      <main className="">{children}</main>

    </div>
    <HeroMarquee />

    <div className="container relative w-full min-h-screen px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[98rem] text-white">
    <StorySection/>
    </div>
    </div>
  );
};

export default Layout;
