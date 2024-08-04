import React, { useState } from 'react';
import Nav from './Nav'; // Import your Nav component

const ParentComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(prevState => !prevState);
  };

  return (
    <div>
      {/* Button to toggle nav visibility */}
      <button onClick={toggleNav} className="toggle-nav-btn">
        {isNavOpen ? 'Close Nav' : 'Open Nav'}
      </button>

      {/* Pass the state and handler to Nav */}
      {isNavOpen && <Nav closeNav={() => setIsNavOpen(false)} />}
    </div>
  );
};

export default ParentComponent;
