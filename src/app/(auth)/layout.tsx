import { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <div className="flex align-middle justify-center h-screen">
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;
