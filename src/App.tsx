import {CssBaseline, ThemeProvider} from '@mui/material';
import React from 'react';
import {CustomRouterProvider} from './Routes';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {theme} from "./Theme/theme.tsx";
import {Loading} from "./Components/Loading/Loading.tsx";
import environment from "./Hooks/useRelayEnv.ts";
import {RelayEnvironmentProvider} from "react-relay";
export function App() {
    // https://dev.azure.com/Stackworx/Book-A-Pharmacy/_search?action=contents&text=useRelayEnv&type=code&lp=code-Project&filters=ProjectFilters%7BBook-A-Pharmacy%7DRepositoryFilters%7BBookAPharmacy%7D&pageSize=25&result=DefaultCollection/Book-A-Pharmacy/BookAPharmacy/GBmain//src/ClientApp/src/%40BookAPharmacy/BookAPharmacy/Hooks/useRelayEnv.ts
    // Extra Resource: https://relay.dev/docs/guides/network-layer/
    // const {environment, version, resetEnvironment} = environment;

    return (
        <AppWithEnvironment
            // key={version}/
            // environment={environment}
            // resetEnvironment={resetEnvironment}
        />
    );
}

function AppWithEnvironment(

) {
    return (
        <RelayEnvironmentProvider environment={environment}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <React.Suspense fallback={<Loading />}>
                            {/*<SnackBarProvider>*/}
                            {/*    <ModalContextProvider>*/}
                            {/*        <AuthContextController resetEnvironment={resetEnvironment}>*/}
                                        <CustomRouterProvider relayEnv={environment} />
                                    {/*</AuthContextController>*/}
                                {/*</ModalContextProvider>*/}
                            {/*</SnackBarProvider>*/}
                        </React.Suspense>
                    </ThemeProvider>
                </LocalizationProvider>
        </RelayEnvironmentProvider>
    );
}
