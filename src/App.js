import React from 'react';
import './style.css';
import LandscapeSVG from './components/LandscapeSVG'

function App() {
  return (
    <div className="Landing">
      <header className="Landing-header">
      <LandscapeSVG/>
        <p>
          This is Yenny's website.
        </p>
      </header>
    </div>
  );
}

export default App;
