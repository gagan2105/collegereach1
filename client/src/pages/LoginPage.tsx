import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Mail, Lock, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { loginUser } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";
import { images } from "../data/content";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser({ email, password });
      await login(data.token);
      toast.success("Successfully logged in!");
      navigate("/");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-cream">
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero}
          alt="Campus bg"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-maroon/90" />
      </div>

      <Link
        to="/"
        className="absolute top-8 left-8 text-white/80 hover:text-white flex items-center gap-2 z-10 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </Link>

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative z-10 mx-4">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center mb-4">
            <GraduationCap className="w-6 h-6 text-maroon" />
          </div>
          <h2 className="text-2xl font-bold font-heading text-gray-900">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Sign in to access your student portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-maroon outline-none transition-all"
                placeholder="student@edureach.edu"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-maroon outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-maroon hover:bg-maroon-light text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-6 disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-maroon font-semibold hover:text-maroon-light"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
