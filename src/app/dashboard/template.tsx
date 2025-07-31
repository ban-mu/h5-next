'use client'
import { useState } from 'react';

export default function DashBoardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>我是二级dashboard-template{ count }</h2>
      <button onClick={() => setCount(count + 1)}>增加count</button>
      {children}
    </div>
  );
}
