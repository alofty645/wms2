import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
export const metadata = {
  title: "WMS2",
  description: "WMS2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950">
      <div className="flex">
        <Sidebar />
        <div className="flex-row flex-1">
          <Topbar />
          <Header />
          {children}
        </div>
      </div>
      <body></body>
    </html>
  );
}
