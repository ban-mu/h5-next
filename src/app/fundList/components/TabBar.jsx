"use client";
import { useState } from "react";

const TabBar = ({ tabs, onChange }) => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
    onChange(index);
  };

  return (
    <div className="flex border-b border-gray-200 bg-white sticky top-0 z-10">
      {tabs.map((tab, idx) => (
        <div
          key={idx}
          className={`flex-1 text-center py-2 ${
            active === idx ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
          }`}
          onClick={() => handleClick(idx)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
