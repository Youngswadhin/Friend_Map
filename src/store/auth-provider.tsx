import { createContext, useContext, ReactNode, useEffect } from "react";
import { useQuery } from "react-query";
import { User } from "../types/types";
import apiRequest from "../utils/api";
import { useCookies } from "react-cookie";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const fetchUser = async (): Promise<User> => {
  const { data } = await apiRequest<User>({ method: "GET", url: "" });
  return data;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: user,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    enabled: false,
    queryKey: ["user"],
    queryFn: fetchUser,
  });
  const isAuthenticated = !!user;

  const [{ jwt }] = useCookies(["jwt"]);

  useEffect(() => {
    if (jwt) {
      refetch();
    }
  }, [jwt, refetch]);

  return (
    <AuthContext.Provider
      value={{ user: user || null, isLoading, isError, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
