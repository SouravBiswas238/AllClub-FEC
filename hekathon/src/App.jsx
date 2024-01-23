import { Link, Outlet } from "react-router-dom";
import NavbarIndex from "./pages/Navbar/NavbarIndex";
import Footer from "./pages/Footer/Footer";

export default function App() {
  return (
    <>
      {/* ---- navbar top fixed content ------ */}

      <NavbarIndex />


      <Outlet />
      {/* ----- fixed content -------- */}
      <Footer/>
    </>
  );
}