import { createContext, useContext } from "react";
import { authClient } from "../lib/auth-client";
import { Session } from "../lib/auth-client";
import { BetterFetchError } from "better-auth/react";

interface AuthContextType {
    session: Session | null;
    isPending: boolean;
    error: BetterFetchError | null;
    refetch: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error("Context is undefined");
    }
    return context;
}
// To get the data from useSession(). {data: session, isPending, error, refetch}
// instead call useAuth() anywhere in the application, you will get the same data
export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const {data: session, isPending, error, refetch } = authClient.useSession();

    return (
        <AuthContext.Provider value={{session, isPending, error, refetch}}>
            {children}
        </AuthContext.Provider>
    );
};