import { QueryClientProvider, QueryClient } from "react-query";
import AppRoutes from "./router/routes";
import { AuthProvider } from "./store/auth-provider";
import { CookiesProvider } from "react-cookie";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
