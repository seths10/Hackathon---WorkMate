import React, { useState } from 'react';

const DeskIcon: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedShape, setSelectedShape] = useState<string | null>(null);

  const handleShapeClick = (shapeId: string) => {
    setIsModalOpen(true);
    setSelectedShape(shapeId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedShape(null);
  };

  return (
    <div>
      <svg
        id="eCFY0HNRBoM1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={500}
        height={500}
        viewBox="0 0 500 500"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        {/* Desk Rectangle */}
        <rect
          id="desk"
          x="10"
          y="50"
          width="480"
          height="300"
          rx="0"
          ry="0"
          fill="#d8d8d8"
          stroke="#000"
        />

        {/* Clickable Circles */}
        <circle
          id="shape1"
          cx="100"
          cy="100"
          r="20"
          fill="blue"
          onClick={() => handleShapeClick('Seat 1')}
        />
        <circle
          id="shape2"
          cx="250"
          cy="100"
          r="20"
          fill="red"
          onClick={() => handleShapeClick('Seat 2')}
        />
         <circle
          id="shape2"
          cx="400"
          cy="100"
          r="20"
          fill="black"
          onClick={() => handleShapeClick('Seat 3')}
        />
         <circle
          id="shape2"
          cx="400"
          cy="300"
          r="20"
          fill="brown"
          onClick={() => handleShapeClick('Seat 4')}
        />
         <circle
          id="shape2"
          cx="250"
          cy="300"
          r="20"
          fill="green"
          onClick={() => handleShapeClick('Seat 5')}
        />
         <circle
          id="shape2"
          cx="100"
          cy="300"
          r="20"
          fill="yellow"
          onClick={() => handleShapeClick('Seat 6')}
        />
      </svg>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm or Cancel</h2>
            <p>Do you want to perform an action on shape: {selectedShape}?</p>
            <button onClick={closeModal}>Cancel</button>
            <button onClick={closeModal}>Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeskIcon;