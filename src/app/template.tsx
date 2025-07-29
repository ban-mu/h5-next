export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="temlplate">
      <h2>我是template</h2>
      {children}
    </div>
  );
}
