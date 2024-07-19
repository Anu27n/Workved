import React, { useState } from 'react';
import ItemRow from './ItemRow';
import Summary from './Summary';

const initialItems = [
  { id: 1, name: 'Small Cubicle (4\'x2\')', minSqFt: 0, economy: 0, midRange: 0, highEnd: 0 },
  { id: 2, name: 'Large Cubicle (8\'x8\')', minSqFt: 0, economy: 0, midRange: 0, highEnd: 0 },
  { id: 3, name: 'Standard Cubicle (5\'x6\')', minSqFt: 0, economy: 0, midRange: 0, highEnd: 0 },
];

function Calculator() {
  const [items, setItems] = useState(initialItems);

  const handleChange = (id, field, value) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="calculator">
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Category</th>
            <th>Min Sq Ft</th>
            <th>Economy</th>
            <th>Mid-Range</th>
            <th>High-End</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <ItemRow key={item.id} item={item} onChange={handleChange} />
          ))}
        </tbody>
      </table>
      <Summary items={items} />
    </div>
  );
}

export default Calculator;
