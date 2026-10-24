import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

function RootLayout() {
  const location = useLocation();

  // Scroll to #anchors (e.g. /guide#plan) after navigation; location.key
  // changes on every navigation, so repeated clicks on the same link work.
  useEffect(() => {
    if (!location.hash) return;

    const id = decodeURIComponent(location.hash.slice(1));
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash, location.key]);

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
