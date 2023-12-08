import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import useAccessToken from "../hooks/useAccessToken";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useAccessToken('auth', {});
    const baseUrl = "http://localhost:3030/users";

    const login = async (email, password) => {
        const response = await fetch(`${baseUrl}/login`, {
            body: JSON.stringify({ email, password }),
            headers: {
                'content-type': 'application/json'
            },
            method: "POST"
        });

        const result = await response.json();

        if (response.status !== 200) {
            throw result;
        }

        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);

        navigate("/");
    }

    const register = async (email, password) => {
        const response = await fetch(`${baseUrl}/register`, {
            body: JSON.stringify({ email, password }),
            headers: {
                'content-type': 'application/json'
            },
            method: "POST"
        });

        const result = await response.json();

        if (response.status !== 200) {
            throw result;
        }

        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);

        navigate("/");
    }

    const logout = () => {
        fetch(`${baseUrl}/logout`);
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const values = {
        login, register, logout,
        isAuthenticated: !!auth.accessToken,
        userId: auth._id,
        username: auth.username
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContext.displayName = 'AuthContext';
export default AuthContext;