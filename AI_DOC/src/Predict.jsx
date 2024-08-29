import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'grape', label: 'Grape' },
];

const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      <h3>Select Fruits</h3>
      <Select
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleSelectChange}
        placeholder="Select fruits..."
      />
      <div style={{ marginTop: '20px' }}>
        {selectedOptions.map(option => (
          <span key={option.value} style={{
            display: 'inline-block',
            backgroundColor: '#007bff',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '20px',
            margin: '5px',
          }}>
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
