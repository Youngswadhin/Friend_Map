import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../store/auth-provider";

interface ProtectedRouteProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  ...rest
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  if (!isLoading && !isAuthenticated) return <Navigate to="/login" />;
  return <Route {...rest} element={children} />;
};

export default ProtectedRoute;
