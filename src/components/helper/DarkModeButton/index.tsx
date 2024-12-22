import React from "react";
import useDarkMode from "../DarkMode/index";
import Switch from "../RoundButton";

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <Switch isChecked={isDarkMode} onToggle={toggleDarkMode} />
    </div>
  );
};

export default DarkModeToggle;
