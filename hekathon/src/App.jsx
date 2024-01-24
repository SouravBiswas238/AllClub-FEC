import { Link, Outlet } from "react-router-dom";

import { Home } from "./pages/Home";
import ClubsIndex from "./pages/Clubs/ClubsIndex";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      {/* ---- navbar top fixed content ------ */}

      

       <Home/>
       <ClubsIndex/>
       <Contact/>
       
      {/* <Outlet /> */}
      {/* ----- fixed content -------- */}
    </>
  );
}