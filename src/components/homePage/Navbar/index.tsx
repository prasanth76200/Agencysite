        import React, { useState } from 'react';

        const Navbar = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const toggleNavbar = () => {
            setIsMenuOpen(!isMenuOpen); // Toggle the visibility of the menu
        };

        return (
            <div className="flex justify-center">
            <nav
                className="bg-primary rounded-3xl mt-4 w-[1200px]"

            >
                <div className="flex items-center justify-between py-2">
                <div className="flex flex-shrink-0 items-center pl-5">
                    <a href="/" className="text-white text-3xl font-bold">
                    <span className="text-white text-3xl font-bold">Meta</span>
                    &nbsp;
                    <span className="text-white text-3xl font-bold">Brainz</span>
                    </a>
                </div>

                {/* Hamburger button for mobile view */}
                <div className="md:hidden">
                    <button className="text-white" onClick={toggleNavbar}>
                    ☰
                    </button>
                </div>

                {/* Navbar links */}
                <div
                    className={`${
                    isMenuOpen ? 'block' : 'hidden'
                    } flex items-center justify-between py-3 md:block pr-4`}
                >
                    <ul
                    className="mt-4 flex flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
                    id="navbar-default"
                    >
                    <li>
                        <a
                        className="block px-4 py-2 no-underline outline-none hover:no-underline"
                        href="/#about"
                        aria-label="About Section"
                        >
                        <div className="text-sm font-bold text-white transition-colors duration-300">
                            ABOUT
                        </div>
                        </a>
                    </li>
                    <li>
                        <a
                        className="block px-4 py-2 no-underline outline-none hover:no-underline"
                        href="/#experience"
                        aria-label="Experience Section"
                        >
                        <div className="text-sm font-bold text-white transition-colors duration-300">
                            EXPERIENCE
                        </div>
                        </a>
                    </li>
                    <li>
                        <a
                        className="block px-4 py-2 no-underline outline-none hover:no-underline"
                        href="/#skills"
                        aria-label="Skills Section"
                        >
                        <div className="text-sm font-bold text-white transition-colors duration-300">
                            SKILLS
                        </div>
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
