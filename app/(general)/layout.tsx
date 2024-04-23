import { Navbar } from "@/components";

export default function GeneralLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <Navbar/>
      <main className="flex flex-col items-center p24">
        <span className="text-lg">Hola world</span>
        {children}
      </main>
      </>
    );
  }
  