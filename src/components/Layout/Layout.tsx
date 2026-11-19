import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = ({ personalBest }: { personalBest: number | null }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar personalBest={personalBest} />
      <main className="flex-grow-1 d-flex flex-column">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
