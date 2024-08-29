import React, { useState } from 'react';
import './Details.css';
import Navbar from './Navbar';
import { Link ,Navigate,useNavigate} from 'react-router-dom';

const Details = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        age: '',
        email: '',
        phone: '',
    });

    
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
                    {/* <Link to="/Predict"> */}
                    <button type="submit">Submit</button>
                    {/* </Link> */}
                </form>
            </div>
        </div>
    );
};

export default Details;
