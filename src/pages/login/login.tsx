import LoginModal from "./modals/login-modal";
import SignupModal from "./modals/signup-modal";

const Login = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100 flex-col">
      <div className="app-name text-[clamp(50px,10vw,150px)] font-bold text-gray-500">
        Friendship
      </div>
      <div className="flex gap-3">
        <LoginModal />
        <SignupModal />
      </div>
    </div>
  );
};

export default Login;
