
import Navbar from "../components/homePage/Navbar";
// import Footer from "../components/homePage/Footer";



interface LayoutProps {
  children: React.ReactNode;
  }
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div className="container relative px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white min-h-screen">
      <Navbar />
      <main className="">{children}</main>

      {/* <Footer /> */}
    </div>
    );
  };
  
  export default Layout;