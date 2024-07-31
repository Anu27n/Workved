import React, { useState } from 'react';
import AreaInput from './AreaInput';
import FlexBoxDisplay from './FlexBoxDisplay';
import './styles.css';

const areaValues = {
  linear: 23,
  lType: 28.749,
  md: 140,
  manager: 80,
  small: 80,
  ups: 90,
  bms: 90,
  server: 40
};

const initialAreas = {
  linear: 0,
  lType: 0,
  md: 0,
  manager: 0,
  small: 0,
  ups: 0,
  bms: 0,
  server: 0
};

const App = () => {
  const [totalArea, setTotalArea] = useState(2000);
  const [areas, setAreas] = useState(initialAreas);

  const updateAreas = (type, value) => {
    setAreas(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const builtArea = Object.keys(areas).reduce((acc, key) => acc + areas[key] * areaValues[key], 0);
  const availableArea = totalArea - builtArea;

  return (
    <div className="container">
      <AreaInput setTotalArea={setTotalArea} />
      <div className="content">
        <FlexBoxDisplay areas={areas} areaValues={areaValues} totalArea={totalArea} builtArea={builtArea} availableArea={availableArea} />
        <div className="sections">
          <div className="section">
            <h3>Open Workspaces</h3>
            {['linear', 'lType'].map(type => (
              <div key={type} className="workspace">
                <img src={`/${type}.png`} alt={`${type} Workstations`} />
                <button className="control-btn" onClick={() => updateAreas(type, Math.max(areas[type] - 1, 0))}>-</button>
                <span>{areas[type]}</span>
                <button className="control-btn" onClick={() => updateAreas(type, areas[type] + 1)}>+</button>
              </div>
            ))}
          </div>
          <div className="section">
            <h3>Cabins</h3>
            {['md', 'manager', 'small'].map(type => (
              <div key={type} className="cabins">
                <img src={`/${type}.png`} alt={`${type} Cabin`} />
                <button className="control-btn" onClick={() => updateAreas(type, Math.max(areas[type] - 1, 0))}>-</button>
                <span>{areas[type]}</span>
                <button className="control-btn" onClick={() => updateAreas(type, areas[type] + 1)}>+</button>
              </div>
            ))}
          </div>
          <div className="section">
            <h3>Public Spaces</h3>
            {['ups', 'bms', 'server'].map(type => (
              <div key={type} className="workspace">
                <img src={`/${type}.png`} alt={`${type} Room`} />
                <button className="control-btn" onClick={() => updateAreas(type, Math.max(areas[type] - 1, 0))}>-</button>
                <span>{areas[type]}</span>
                <button className="control-btn" onClick={() => updateAreas(type, areas[type] + 1)}>+</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
