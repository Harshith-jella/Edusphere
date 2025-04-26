
import { AuthForm } from "@/components/auth/AuthForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <AuthForm type="login" />
    </div>
  );
};

export default Login;
