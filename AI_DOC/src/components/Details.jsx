import React, { useState } from 'react';
import './Details.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        age: '',
        email: '',
        phone: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        
        // Send data to the Flask backend
        fetch('http://127.0.0.1:5000/submit-details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            setSuccessMessage('Submitted successfully!');
            setSubmitted(true); // Set form as submitted
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    // Function to navigate to the Predict page
    const goToPredictPage = () => {
        navigate('/Predict');
    };

    return (
        <div className="containers">
            <Navbar />
            <div className="form-containers">
                <h2>Enter Patient Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
                {/* Modal-style message box */}
                {submitted && (
                    <div className="modal">
                        <div className="modal-content">
                            <p>{successMessage}</p>
                            <button onClick={goToPredictPage}>Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Details;
