"use client";
import React, { useState } from "react";
import style from './tabbar.module.scss'
import { tabList } from '../constant'

// interface TabItem {
//   id: string,
//   label: string,
// }

// interface TabProps {
//   id: string,
//   onChange: (info: TabItem) => void
// }

const TabBar = ({ onChange }) => {
  const [id, setTabId] = useState('');

  const handleClick = (item) => {
    setTabId(item.id);
    onChange(item);
  };

  return (
    <div className={style.btnBox}>
      {tabList.map((item, index) => (
        <div
          key={index}
          className={`${
            id === item.id ? style.active : ""
          } ${style.btnItem}`}
          onClick={() => handleClick(item)}
        >
          <span>{ item.label }</span>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
