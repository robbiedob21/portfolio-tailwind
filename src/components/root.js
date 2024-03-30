import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navigation from "./header";

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
