import React from "react";
import DashBoard from "./dashboard";
import Silebar from "./silebar";
import { useRouteMatch, Route } from "react-router-dom";
import Users from "./users";


const Main = () => {
    let { path } = useRouteMatch();
    return (
        <>
            <Silebar />
            <Route exact path={`${path}/products`}>
                <DashBoard />
            </Route>
            <Route path={`${path}/users`} >
                <Users />
            </Route>
        </>
    )

}

export default Main;