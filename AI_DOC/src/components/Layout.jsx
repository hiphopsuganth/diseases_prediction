import React from 'react';
import './layout.css'; 

function Layout() {
  return (
    <div className="grid-container">
    <div className="grid-item section1">
      <h1>content 1</h1>
    </div>
    <div className="grid-item section2"
     style={{
        backgroundImage: `url(public/herbal2.jpg)`,
        backgroundSize: 'cover', 
        height: '60vh', 
        width: '80%', 
        marginTop:'50px',
        marginLeft:'50px'
      }}>
          
    </div>
    <div className="grid-item section3"
    style={{
        backgroundImage: `url(public/herbal2.jpg)`,
        backgroundSize: 'cover', 
        height: '60vh', 
        width: '80%',
        marginLeft:'50px'
      }}>
    
    </div>
    <div className="grid-item section4">
      <h1>Section 4</h1>
    </div>
    <div className="grid-item section5">
      <h1>Section 5</h1>
    </div>
    <div className="grid-item section6"
    style={{
        backgroundImage: `url(public/herbal2.jpg)`,
        backgroundSize: 'cover',
        height: '60vh', 
        width: '80%', 
        marginLeft:'50px',
        marginBottom:'50px'
      }}>
    
    </div>
  </div>
  );
}

export default Layout;
