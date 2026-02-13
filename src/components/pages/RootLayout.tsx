import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

function RootLayout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default RootLayout;
