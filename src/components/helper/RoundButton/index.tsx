import React from "react";
import styled from "styled-components";

interface SwitchProps {
  isChecked: boolean;
  onToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isChecked, onToggle }) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onToggle} // Handle the toggle
        />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    display: block;
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;
    --size-of-icon: 1.4em;
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f4f5;
    transition: 0.4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: var(--size-of-icon);
    width: var(--size-of-icon);
    border-radius: 20px;
    left: var(--slider-offset);
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #303136;
  }

  input:checked + .slider:before {
    left: calc(100% - (var(--size-of-icon) + var(--slider-offset)));
    background: #303136;
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
  }
`;

export default Switch;
