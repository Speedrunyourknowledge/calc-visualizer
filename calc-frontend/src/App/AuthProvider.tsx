import { authClient } from "../lib/auth-client";
import { createContext } from "react";
import { Session } from "../lib/auth-client";
import { BetterFetchError } from "better-auth/react";

interface AuthContextType {
    session: Session | null;
    isPending: boolean;
    error: BetterFetchError | null;
    refetch: () => void;
}

//@ts-ignore unknown type
export const AuthContext = createContext<AuthContextType>();

// To get the data from useSession()
// {data: session, isPending, error, refetch}
function AuthProvider({children}: {children: React.ReactNode}){
    const {data: session, isPending, error, refetch } = authClient.useSession();

    return (
        <AuthContext.Provider value={{session, isPending, error, refetch}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider