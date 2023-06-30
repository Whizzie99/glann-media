import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../../components/GlobalStyles/GlobalStyles";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";

const RootLayout: React.FC = () => {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}
 
export default RootLayout;