import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArrowTop from '../../assets/arrow-top.png';
import ArrowBottom from '../../assets/arrow-bottom.png';
import './TogglePanel.css';

function TogglePanel({ text, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [panelHeight, setPanelHeight] = useState(0);
  const PanelVisibility = useRef();

  useEffect(() => {
    if (isOpen) {
      setPanelHeight(PanelVisibility.current.scrollHeight + 40);
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
          padding: isOpen ? '20px' : '0 20px',
          transition: 'height 0.3s ease-in-out, opacity 0.12s ease-in-out, padding 0.3s ease-in-out',
        }}
      >
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

TogglePanel.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default TogglePanel;
