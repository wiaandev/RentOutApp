import * as React from 'react';
import {Loading} from "../Components/Loading/Loading.tsx";

interface AuthContextType {
    authenticated: boolean;
    roles: Role[];
    me: {id: string; email: string; fullName: string} | null;
    handleLogout(): void;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    setInitialized: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Role {
    context: string;
    role: string;
    value: string;
}

export const AuthContext = React.createContext<AuthContextType>({
    authenticated: false,
    setAuthenticated: () => false,
    setInitialized: () => false,
    roles: [],
    me: null,
    handleLogout: () => {},
});

export function useAuthContext() {
    return React.useContext(AuthContext);
}

export const AuthContextController = React.memo(function AuthContextController({
                                                                                   children,
                                                                               }: {
    children: React.ReactNode;

}) {
    const [initialized, setInitialized] = React.useState(false);
    const [authenticated, setAuthenticated] = React.useState(false);
    const [roles, setRoles] = React.useState<Role[]>([]);
    const [me, setMe] = React.useState<
        {
            id: string;
            email: string;
            fullName: string;
        } | null
    >(null);

    React.useEffect(() => {
        async function profile() {
            try {
                const resp = await fetch('/api/account/profile', {
                    credentials: 'include', // 👈 Required for cookies
                });
                const json = await resp.json();

                if (!json.value) {
                    setAuthenticated(false);
                    setRoles([]);
                    setMe(null);
                } else {
                    setAuthenticated(true);
                    setRoles(json.value.roles as Role[]);
                    setMe(json.value);
                }
            } catch {
                setAuthenticated(false);
                setRoles([]);
                setMe(null);
            } finally {
                setInitialized(true);
            }
        }

        profile();
    }, [setAuthenticated, setInitialized, initialized, authenticated])

    const handleLogout = React.useCallback(() => {
        setAuthenticated(false);
        setRoles([]);
    },[]);

    const value = React.useMemo(
        () => ({
            authenticated,
            roles,
            me,
            handleLogout,
            setAuthenticated,
            setInitialized,
        }),
        [authenticated, setAuthenticated, handleLogout, me, roles],
    );

    if (!initialized) {
        return <Loading />;
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
});
