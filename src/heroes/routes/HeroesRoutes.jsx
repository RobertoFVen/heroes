import { Outlet } from "react-router-dom";
import { Navbar } from "../../ui";
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages";


export const ChildRoutes = [
    {
        path: "marvel",
        element: <MarvelPage />
    },
    {
        path: "dc",
        element: <DCPage />
    },
    {
        path: "search",
        element:<SearchPage />
    },
    {
        path: "hero/:id",
        element:<HeroPage />
    }
]

export const HeroesRoutes = () => {
  return (

    <>
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
    </>
  )
}
