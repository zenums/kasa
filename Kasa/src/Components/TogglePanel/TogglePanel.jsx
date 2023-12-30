import React, { useState, useRef, useEffect } from 'react';
import ArrowTop from '../../assets/arrow-top.png';
import ArrowBottom from '../../assets/arrow-bottom.png';
import './TogglePanel.css';

function TogglePanel({ text, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [panelHeight, setPanelHeight] = useState(0);
  const PanelVisibility = useRef();

  useEffect(() => {
    if (isOpen) {
      setPanelHeight(PanelVisibility.current.scrollHeight + 20);
    } else {
      setPanelHeight(0);
    }
  }, [isOpen]);

  function togglePanel() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='toggle'>
      <div className="visible-pannel">
        <h3>{title}</h3>
        <img src={isOpen ? ArrowBottom : ArrowTop} alt="" onClick={togglePanel} />
      </div>
      <div
        className={`togglePanel ${isOpen && "active"}`}
        ref={PanelVisibility}
        style={{
          height: isOpen ? panelHeight + 'px' : '0',
          opacity: isOpen ? '1' : '0',
          transition: 'height 0.3s ease-in-out, opacity 0.12s ease-in-out',
        }}
      >
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

export default TogglePanel;