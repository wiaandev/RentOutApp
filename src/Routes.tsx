import {IEnvironment} from "relay-runtime";
import {createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route} from "react-router-dom";
import React from "react";
import {RootLayout} from "./Layouts/RootLayout.tsx";
import {RouterProvider} from "react-router";
import {Login} from "./Pages/Login.tsx";
import {Landing} from "./Pages/Landing.tsx";
import {Register} from "./Pages/Register.tsx";
import {PropertyListings} from "./Pages/PropertyListings/PropertyListings.tsx";
import {ViewProperty} from "./Pages/ViewProperty/ViewProperty.tsx";
import {AuthContext} from "./Context/AuthContext.tsx";

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

                        <Route path={'/listings'} element={<AuthBlocker><PropertyListings/></AuthBlocker>}/>
                        <Route path={'/listings/view/:id'} element={<ViewProperty/>}/>
                    </Route>
                </Route>
            </React.Fragment>
        )
    )
}

// TODO: use for authenticated routes
function AuthBlocker({children}: {children: React.ReactNode}) {
    const {authenticated} = React.useContext(AuthContext);

    if (!authenticated) {
        return <Navigate to='/' />;
    }

    return children;
}

export function CustomRouterProvider({relayEnv}: Props) {
    return <RouterProvider router={router(relayEnv)}/>
}