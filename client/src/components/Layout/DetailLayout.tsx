import React, { ReactNode } from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface DetailLayoutProps {
  children: ReactNode;
}

const DetailLayout: React.FC<DetailLayoutProps> = ({ children }) => {
  return (
    <section className="maxWidthPage">
      <div className="px-[80px]">
        <Navbar />
      </div>
      {children}
      <div className="bg-[#F7F7F7]">
        <div className="px-[160px]">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default DetailLayout;
