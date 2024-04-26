import { Outlet } from "react-router-dom"

import Footer from "./components/footer/footer"
import Navbar, { NavbarLink } from "./components/ui/navbar/navbar"
import rootStore from "./store/rootStore"
import { RootStoreContext } from "./store/rootStoreContext"
const paths = [
  { id: "staking", path: "/" },
  { id: "farmers", path: "/farmers" }
]

function App() {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <Navbar
        links={paths.map((r) => {
          return { name: r.id, path: r.path } as NavbarLink
        })}
      ></Navbar>
      <Outlet />
      <Footer></Footer>
    </RootStoreContext.Provider>
  )
}

export default App
