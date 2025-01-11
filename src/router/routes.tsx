// import Home from '../components/Home';
// import About from '../components/About';
// import Contact from '../components/Contact';

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomeAuth from "../pages/home/home-auth";
import ProtectedRoute from "../pages/protected-route/procted-route";
import { useAuth } from "../store/auth-provider";
import Login from "../pages/login/login";

const Layout = () => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Outlet />;
  return (
    <div className="main w-[100vw] h-[100vh] relative">
      <div className="fixed w-full z-10 flex justify-between items-center px-3 py-1.5 bg-white/40">
        <div className="name font-medium text-xl">Hi Swadhin!</div>
        <div className="acc w-9 aspect-square rounded-full border-2 border-gray-400 hover:scale-105 duration-150"></div>
      </div>
      <Outlet />
    </div>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomeAuth />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<>no page</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
