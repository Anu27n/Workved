import React from 'react';
import './styles.css';

const FlexBoxDisplay = ({ areas, areaValues, totalArea, builtArea, availableArea }) => {
  return (
    <div>
      <div className="flexbox-container">
        {Object.keys(areas).map(type => {
          const area = areas[type] * areaValues[type];
          const percentage = (area / totalArea) * 100;
          return (
            <div
              key={type}
              className={`flexbox-item ${type}`}
              style={{
                flexBasis: `${percentage}%`,
                height: '100%'
              }}
            >
              <span className="flexbox-text">
                {type.charAt(0).toUpperCase() + type.slice(1)}<br />
                {percentage.toFixed(2)}%
              </span>
            </div>
          );
        })}
        <div className="flexbox-item available" style={{ flexBasis: `${(availableArea / totalArea) * 100}%`, height: '100%' }}>
          <span className="flexbox-text">
            Available<br />
            {((availableArea / totalArea) * 100).toFixed(2)}%
          </span>
        </div>
      </div>
      <div className="built-available-area">
        Built Area: {builtArea.toFixed(1)} sq ft<br />
        Available Area: {availableArea.toFixed(1)} sq ft
      </div>
    </div>
  );
};

export default FlexBoxDisplay;
