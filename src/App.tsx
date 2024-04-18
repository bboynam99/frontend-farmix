import { Outlet } from "react-router-dom";

import Footer from "./components/footer/footer";
import Navbar, { NavbarLink } from "./components/navbar/navbar";
const paths = [
  { id: "staking", path: "/" },
  { id: "farmers", path: "/farmers" },
];

function App() {
  return (
    <>
      <Navbar
        links={paths.map((r) => {
          return { name: r.id, path: r.path } as NavbarLink;
        })}
      ></Navbar>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
