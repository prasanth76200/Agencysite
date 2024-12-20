
const Navbar = () => {
            return (
                <div className="flex justify-center">
                <nav
                    className="bg-primary rounded-3xl mt-4 w-[300px] h-[70px] md:w-[1200px] md:h-auto shadow-[1px_7px_50px] shadow-secondary ">
                    <div className="md:flex items-center  md:justify-between md:py-1 md:pl-5 ">
                    <div className="flex flex-shrink-0 items-center justify-center md:justify-start md:pl-5 md:pb-1">
                    <a href="/" className="text-white text-3xl font-bold">
                        <span className="text-white text-2xl font-bold">Meta</span>
                        &nbsp;
                        <span className="text-white text-2xl font-bold">Brainz</span>
                    </a>
                    </div>

                    <div className="">
                        <ul
                        className="mt-4 flex flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
                        id="navbar-default" >
                        <li>
                        <a
                            className="block px-4 py-2 no-underline outline-none relative group"
                            href="/#home"
                            aria-label="Home Section">
                            <div className="text-sm font-bold text-white transition-colors duration-300">
                            HOME
                            </div>
                            <span
                            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0 rounded-full border-2 border-white opacity-0 transition-all duration-300 group-hover:w-[100px] group-hover:h-9 group-hover:opacity-100"
                            ></span>
                        </a>
                        </li>
                        <li>
                        <a
                            className="block px-4 py-2 no-underline outline-none relative group"
                            href="/#about"
                            aria-label="About Section">
                            <div className="text-sm font-bold text-white transition-colors duration-300">
                            PORTFOLIO
                            </div>
                            <span
                            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0 rounded-full border-2 border-white opacity-0 transition-all duration-300 group-hover:w-[140px] group-hover:h-10 group-hover:opacity-100"
                            ></span>
                        </a>
                        </li>
                        <li>
                        <a
                            className="block px-6 py-2  no-underline outline-none relative group"
                            href="/#about"
                            aria-label="About Section">
                            <div className="text-sm font-bold text-white transition-colors duration-300">
                            ABOUT
                            </div>
                            <span
                            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0 rounded-full border-2 border-white opacity-0 transition-all duration-300 group-hover:w-[100px] group-hover:h-9 group-hover:opacity-100"
                            ></span>
                        </a>
                        </li>


                       
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>
            );
            };

            export default Navbar;
