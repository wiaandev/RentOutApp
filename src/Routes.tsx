import {IEnvironment} from "relay-runtime";
import {createBrowserRouter, createRoutesFromElements, Outlet, Route} from "react-router-dom";
import React from "react";
import {RootLayout} from "./Layouts/RootLayout.tsx";
import {RouterProvider} from "react-router";
import {Login} from "./Pages/Login.tsx";
import {Landing} from "./Pages/Landing.tsx";
import {Register} from "./Pages/Register.tsx";
import {PropertyListings} from "./Pages/PropertyListings.tsx";

interface Props {
    relayEnv: IEnvironment;
}

const router = (_relayEnv: IEnvironment) => {
    return createBrowserRouter(
        createRoutesFromElements(
            <React.Fragment>
            {/*    Base Layout Wrapper*/}
                <Route element={<RootLayout/>}>
                    <Route
                        element={
                                <Outlet />
                        }
                    >
                        <Route path={'/'} element={<Landing/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/register'} element={<Register/>}/>
                        <Route path={'/listings'} element={<PropertyListings/>}/>
                    </Route>
                </Route>
            </React.Fragment>
        )
    )
}

// TODO: use for authenticated routes
function AuthBlocker({children}: {children: React.ReactNode}) {
    // const {authenticated} = React.useContext(AuthContext);

    // if (!authenticated) {
    //     return <Navigate to='home' />;
    // }

    return children;
}

export function CustomRouterProvider({relayEnv}: Props) {
    return <RouterProvider router={router(relayEnv)}/>
}