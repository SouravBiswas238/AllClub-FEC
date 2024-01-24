import { Link, Outlet } from "react-router-dom";

import { Home } from "./pages/Home";
import ClubsIndex from "./pages/Clubs/ClubsIndex";

export default function App() {
  return (
    <>
      {/* ---- navbar top fixed content ------ */}

      

       <Home/>
       <ClubsIndex/>
       
      {/* <Outlet /> */}
      {/* ----- fixed content -------- */}
    </>
  );
}