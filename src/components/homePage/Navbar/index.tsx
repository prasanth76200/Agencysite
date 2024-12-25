import DarkModeToggle from "../../helper/DarkModeButton";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.271) 2px, transparent 0)",
          backgroundSize: "30px 30px",
          backgroundPosition: "-5px -5px",
        }}
        className="bg-primary  rounded-3xl mt-6 w-[350px] h-[70px] md:w-[900px] md:h-auto shadow-[0px_4px_15px] shadow-primary"
      >
        <div className="md:flex items-center md:justify-between md:py-0 md:pl-5">
          <div className="flex flex-shrink-0 items-center justify-center md:justify-start md:pl-5 my-3 md:pb-1">
            <a href="/" className="text-white text-3xl font-bold">
              <span className="text-white text-3xl font-bold">Meta</span>&nbsp;
              <span className="text-white text-3xl font-bold">Brainz</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            {/* <ul
              className="mt-4 flex flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
              id="navbar-default"
            >
              <li>
                <a
                  className="block px-4 py-2 no-underline outline-none relative group"
                  href="/#home"
                  aria-label="Home Section"
                >
                  <div className="text-sm font-bold text-white transition-colors duration-300">
                    STORY
                  </div>
                  <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0 rounded-full border-2 border-white opacity-0 transition-all duration-300 group-hover:w-[100px] group-hover:h-9 group-hover:opacity-100"></span>
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 no-underline outline-none relative group"
                  href="/#about"
                  aria-label="About Section"
                >
                  <div className="text-sm font-bold text-white transition-colors duration-300">
                    PORTFOLIO
                  </div>
                  <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0 rounded-full border-2 border-white opacity-0 transition-all duration-300 group-hover:w-[120px] group-hover:h-10 group-hover:opacity-100"></span>
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 no-underline outline-none relative group"
                  href="/#about"
                  aria-label="About Section"
                >
                  <div className="text-sm font-bold text-white transition-colors duration-300">
                   SERVICES
                  </div>
                  <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0 rounded-full border-2 border-white opacity-0 transition-all duration-300 group-hover:w-[70px] group-hover:h-9 group-hover:opacity-100"></span>
                </a>
              </li>
            </ul> */}

            {/* Dark Mode Toggle visible on both mobile and desktop */}
            <div className=" absolute right-[15px] mt-[-50px] px-4  md:mt-1 md:static">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
