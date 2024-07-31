import React from 'react';
import './styles.css';

const FlexBoxDisplay = ({ areas, areaValues, totalArea, builtArea, availableArea }) => {
  return (
    <div className="right-panel">
      <div className="area-info">
        <p>Built Area: <span className="highlight">{builtArea.toFixed(1)}</span> sq ft.</p>
        <p>Available Area: <span className="highlight">{availableArea.toFixed(1)}</span> sq ft.</p>
      </div>
      <div className="area-display">
        {Object.keys(areas).map(key => (
          areas[key] > 0 && (
            <div
              key={key}
              className={`box ${key}-box`}
              style={{ flexGrow: (areas[key] * areaValues[key]) / totalArea, backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}` }}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)} Workstations
              <br />
              {(areas[key] * areaValues[key] / totalArea * 100).toFixed(1)}%
            </div>
          )
        ))}
        {availableArea > 0 && (
          <div className="box free-space-box" style={{ flexGrow: availableArea / totalArea, backgroundColor: '#cccccc' }}>
            Free Space
            <br />
            {(availableArea / totalArea * 100).toFixed(1)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default FlexBoxDisplay;
