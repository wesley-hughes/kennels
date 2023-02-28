import { Navigate, useLocation } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"

export const Authorized = ({ children }) => {
    const location = useLocation()

    if (localStorage.getItem("kennel_customer")) {
        return (
            <>
                <NavBar />
                <ApplicationViews />
            </>
        );
    }
    else {
        return <Navigate
            to={`/login/${location.search}`}
            replace
            state={{ location }} />
    }
}