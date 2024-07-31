import React, { useState } from 'react';
import './App.css';

const areaValues = {
  linear: 23,
  lType: 28.749,
  md: 140,
  manager: 80,
  small: 80,
};

const totalArea = 2000;

function App() {
  const [areas, setAreas] = useState({
    linear: 0,
    lType: 0,
    md: 0,
    manager: 0,
    small: 0,
  });

  const updateAreas = () => {
    const builtArea = Object.keys(areas).reduce((acc, key) => acc + areas[key] * areaValues[key], 0);
    const availableArea = totalArea - builtArea;

    return {
      builtArea: builtArea.toFixed(1),
      availableArea: availableArea.toFixed(1),
      areaDisplay: Object.keys(areas).map((key) =>
        areas[key] > 0 ? {
          key,
          flexGrow: areas[key] * areaValues[key] / totalArea,
          percentage: ((areas[key] * areaValues[key] / builtArea) * 100).toFixed(1),
        } : null
      ).filter(Boolean)
    };
  };

  const { builtArea, availableArea, areaDisplay } = updateAreas();

  const increment = (type) => {
    if (areas[type] * areaValues[type] + areaValues[type] <= totalArea) {
      setAreas(prev => ({ ...prev, [type]: prev[type] + 1 }));
    }
  };

  const decrement = (type) => {
    if (areas[type] > 0) {
      setAreas(prev => ({ ...prev, [type]: prev[type] - 1 }));
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="section">
          <h3>Open Workspaces</h3>
          {['linear', 'lType'].map(type => (
            <div className="workspace" key={type}>
              <img src={`${process.env.PUBLIC_URL}/images/${type}_workstations.png`} alt={`${type} Workstations`} />
              <div className="controls">
                <button className="control-btn" onClick={() => decrement(type)}>-</button>
                <span id={`${type}-count`}>{areas[type]}</span>
                <button className="control-btn" onClick={() => increment(type)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="section">
          <h3>Cabins</h3>
          {['md', 'manager', 'small'].map(type => (
            <div className="cabins" key={type}>
              <img src={`${process.env.PUBLIC_URL}/images/${type}_cabin.png`} alt={`${type} Cabin`} />
              <div className="controls">
                <button className="control-btn" onClick={() => decrement(type)}>-</button>
                <span id={`${type}-count`}>{areas[type]}</span>
                <button className="control-btn" onClick={() => increment(type)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right-panel">
        <div className="area-info">
          <p>Built Area: <span id="built-area">{builtArea}</span> sq ft.</p>
          <p>Available Area: <span id="available-area">{availableArea}</span> sq ft.</p>
        </div>
        <div id="area-display" className="area-display">
          {areaDisplay.map(({ key, flexGrow, percentage }) => (
            <div key={key} className={`box ${key}-box`} style={{ flexGrow }}>
              {key.charAt(0).toUpperCase() + key.slice(1)} Workstations<br />{percentage}%
            </div>
          ))}
          {totalArea - builtArea > 0 && (
            <div className="box free-space-box" style={{ flexGrow: (totalArea - builtArea) / totalArea }}>
              Empty Area<br />{((availableArea / totalArea) * 100).toFixed(1)}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
