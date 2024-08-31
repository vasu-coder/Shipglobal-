import React, { useState } from 'react';
import'./style.css'

const AccordionSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-section" >
      <h2 className="accordion-header" onClick={handleToggle}>
        Section Header
      </h2>
      <div
        className={`accordion-content ${isOpen ? 'show' : ''}` }
        style={{ height: isOpen ? 'auto' : 0 }}
      >
        <p>Section Content</p>
      </div>
    </div>
  );
};

export default AccordionSection;