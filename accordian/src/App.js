
import './App.css';
import AccordionSection from './component/accordion_component';
import { useState } from 'react';

function App() {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (sectionIndex) => {
    setOpenSection(sectionIndex);
  };

  return (
    <div className="accordion">
      {[1, 2, 3].map((sectionIndex) => (
        <AccordionSection
          key={sectionIndex}
          isOpen={openSection === sectionIndex}
          onToggle={() => handleToggle(sectionIndex)}
        />
        
      ))}
      
    </div>
  );
}

export default App;
