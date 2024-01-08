import Navbar from "./_components/navbar";

export default function LeactureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <main className="h-full pt-24 lg:pt-[4.5rem]">{children}</main>
    </div>
  );
}
