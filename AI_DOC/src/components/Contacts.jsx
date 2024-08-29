import React from 'react';
import './contacts.css'; 

function Contact() {
  return (
    <footer className="contact">
      <h2>Contact Us</h2>
      <p>Email: 
             <a href="mailto:contact@example.com">contact@example.com</a></p>
      <p>Phone: 
              <a href="tel:+1234567890">+1234567890</a></p>
      <p>Address: <h3>Anna University,Guindy,chennai</h3> </p>
    </footer>
  );
}

export default Contact;
