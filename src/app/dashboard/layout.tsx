export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>我是二级dashboard-layout</h2>
      {children}
    </div>
  );
}
