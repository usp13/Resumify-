import { createContext, useState, useEffect } from "react";
import { getme } from "./services/auth.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const getAndSetUser = async () => {
            try {
                const data = await getme();

                if (data) {
                    setuser(data.user);
                }
            } catch (error) {
                console.error("GetMe Error:", error);
                setuser(null);
            } finally {
                setloading(false);
            }
        };

        getAndSetUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setuser,
                loading,
                setloading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};