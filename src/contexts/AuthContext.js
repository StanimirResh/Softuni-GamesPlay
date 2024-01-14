import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocaleStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage("auth", {});

    const userLogout = () => {
        setAuth({});
        localStorage.clear();
    };
    const userLogin = (authData) => {
        setAuth(authData);
    };

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
