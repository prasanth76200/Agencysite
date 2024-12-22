import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const bodyElement = document.body;

    if (isDarkMode) {
      bodyElement.classList.add("dark");
      bodyElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      bodyElement.classList.add("light");
      bodyElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
