import Navbar from "./_components/navbar";

export default function LeactureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <main className="h-full">{children}</main>
    </div>
  );
}
