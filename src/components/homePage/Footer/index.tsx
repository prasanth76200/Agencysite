// src/components/Footer.js
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 dark:bg-backgroundDark md:flex md:items-center md:justify-center">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  © {currentYear} <a href="#" className="hover:underline">Meta Brainz</a>. All Rights Reserved.
              </span>
              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                 
              </ul>
          </div>
      </footer>
  );
};

export default Footer;
