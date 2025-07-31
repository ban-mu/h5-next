'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const linkData = [
  { name: 'About', path: '/dashboard/about' },
  { name: 'Settings', path: '/dashboard/settings' },
]

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  console.log(pathName, 'pathName');
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className='flex gap-4'>
        {
          linkData.map((link) => (
            <Link key={link.path} className={pathName === link.path ? 'text-purple-500' : ''} href={link.path}>{link.name}</Link>
          ))
        }
        {/* <Link className={pathName === '/dashboard/about' ? 'text-purple-500' : ''} href="/dashboard/about">About</Link> */}
        {/* <Link className={pathName === '/dashboard/settings' ? 'text-purple-500' : ''} href="/dashboard/settings">settings</Link> */}
      </div>
      <h2>我是二级dashboard-layout{ count }</h2>
      <button onClick={() => setCount(count + 1)}>增加count</button>
      {children}
    </div>
  );
}
