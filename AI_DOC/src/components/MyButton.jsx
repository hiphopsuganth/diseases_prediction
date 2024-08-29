import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function MyButton({value}) {
  return (
        
    <div>
      <Link to="/Details">
      <button
        type="button"
        className="bton"
        style={{
        }}
      >
       {value}
      </button>
      </Link>
    </div>
  );
}

export default MyButton;
