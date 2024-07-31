import React, { useState } from 'react';

const AreaInput = ({ setTotalArea }) => {
  const [inputValue, setInputValue] = useState(2000);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTotalArea(Number(inputValue));
  };

  return (
    <form onSubmit={handleSubmit} className="area-input-form">
      <label>
        Enter Total Office Area (sq ft):
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <button type="submit">Set Area</button>
    </form>
  );
};

export default AreaInput;
