import {CssBaseline, ThemeProvider} from '@mui/material';
import {RelayEnvironmentProvider} from 'react-relay';
// import {useRelayEnv} from './Hooks/useRelayEnv';
import React from 'react';
import {theme} from './Theme/theme';
import {CustomRouterProvider} from './Routes';
import 'dayjs/locale/de';
import {IEnvironment} from 'relay-runtime';

export function App() {
    // https://dev.azure.com/Stackworx/Book-A-Pharmacy/_search?action=contents&text=useRelayEnv&type=code&lp=code-Project&filters=ProjectFilters%7BBook-A-Pharmacy%7DRepositoryFilters%7BBookAPharmacy%7D&pageSize=25&result=DefaultCollection/Book-A-Pharmacy/BookAPharmacy/GBmain//src/ClientApp/src/%40BookAPharmacy/BookAPharmacy/Hooks/useRelayEnv.ts
    // Extra Resource: https://relay.dev/docs/guides/network-layer/
    const {environment, version, resetEnvironment} = useRelayEnv();

    return (
        <AppWithEnvironment
            key={version}
            environment={environment}
            resetEnvironment={resetEnvironment}
        />
    );
}

function AppWithEnvironment(
    {environment, resetEnvironment}: {
        environment: IEnvironment;
        resetEnvironment: () => void;
    },
) {
    return (
        <RelayEnvironmentProvider environment={environment}>
            <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <React.Suspense fallback={<Loading />}>
                            <SnackBarProvider>
                                <ModalContextProvider>
                                    <AuthContextController resetEnvironment={resetEnvironment}>
                                        <CustomRouterProvider relayEnv={environment} />
                                    </AuthContextController>
                                </ModalContextProvider>
                            </SnackBarProvider>
                        </React.Suspense>
                    </ThemeProvider>
                </LocalizationProvider>
            </APIProvider>
        </RelayEnvironmentProvider>
    );
}
