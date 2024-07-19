import React from 'react';

function ItemRow({ item, onChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(item.id, name, Number(value));
  };

  return (
    <tr>
      <td>
        <input type="number" name="quantity" value={item.quantity || ''} onChange={handleInputChange} />
      </td>
      <td>{item.name}</td>
      <td>{item.minSqFt}</td>
      <td>
        <input type="number" name="economy" value={item.economy || ''} onChange={handleInputChange} />
      </td>
      <td>
        <input type="number" name="midRange" value={item.midRange || ''} onChange={handleInputChange} />
      </td>
      <td>
        <input type="number" name="highEnd" value={item.highEnd || ''} onChange={handleInputChange} />
      </td>
    </tr>
  );
}

export default ItemRow;
