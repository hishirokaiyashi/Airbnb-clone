import React, { ReactNode } from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface DetailLayoutProps {
  children: ReactNode;
}
const MainLayout: React.FC<DetailLayoutProps> = ({ children }) => {
  return (
    <section className="max-w-maxWidthHomePage ">
      <Navbar />
      {children}
      <div className="bg-[#F7F7F7]">
        <div className="px-[80px]">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default MainLayout;
