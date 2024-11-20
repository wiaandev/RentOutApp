import {IEnvironment} from "relay-runtime";
import {createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route} from "react-router-dom";
import React from "react";
import {RootLayout} from "./Layouts/RootLayout.tsx";
import {RouterProvider} from "react-router";
import {Login} from "./Pages/Login.tsx";

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
                            <AuthBlocker>
                                <Outlet />
                            </AuthBlocker>
                        }
                    >
                        <Route index element={<Navigate to={'/login'} replace/>}/>
                        <Route path={'login'} element={<Login/>}/>
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