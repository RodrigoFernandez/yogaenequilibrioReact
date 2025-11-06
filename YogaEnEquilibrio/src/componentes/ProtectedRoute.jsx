import { Navigate } from "react-router-dom";
import { useAuth } from "../contextos/AuthContext.jsx";

export const ProtectedRoute = ({ children }) => {
    const { usuario } = useAuth();

    if (!usuario) {
        return <Navigate to="/login" />;
    }

    return children;
};