import React, { useState } from 'react';
import CardComponent from '../components/CardComponent';

const boardsData = {
  Main: ['Camp 1', 'Camp 2', 'Camp 3', 'Camp 1', 'Camp 2', 'Camp 3', 'Camp 1', 'Camp 2', 'Camp 3'],
  Assistant: ['Camp 4', 'Camp 5'],
  Member: ['Camp 6', 'Camp 1'],
};

const Boards = () => {
  const [activeBoard, setActiveBoard] = useState('Main');

  return (
    <div className="boards-container py-8 min-h-screen text-white">
      <div className="w-full md:w-4/5 mx-auto h-14 flex justify-between items-center px-4 md:px-6 bg-gray-800 rounded-xl shadow-lg">
        {Object.keys(boardsData).map((board) => (
          <button
            key={board}
            onClick={() => setActiveBoard(board)}
            className={`font-semibold tracking-wide cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-lg w-1/3 text-center
              ${
                activeBoard === board
                  ? 'bg-purple-600 text-white shadow-xl scale-105'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}>
            {board}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="mx-auto w-[80%]">
        <div className="mx-auto mt-10 px-5 grid grid-cols-3  gap-5 w-full md:w-4/5">
          {boardsData[activeBoard].map((item, index) => (
            <CardComponent key={index} title={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boards;
