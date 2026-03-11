import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-maroon rounded-lg flex items-center justify-center group-hover:bg-maroon-light transition-colors">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading font-bold text-2xl text-gray-900 tracking-tight">EduReach</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-600 hover:text-maroon font-medium transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 pl-6 border-l border-gray-200">
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700">Hi, {user.name.split(" ")[0]}</span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-gray-500 hover:text-maroon transition-colors text-sm font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="text-gray-600 hover:text-maroon font-medium text-sm transition-colors">
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-maroon hover:bg-maroon-light text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-600 hover:text-maroon font-medium block w-full outline-none"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-gray-100 my-2" />
          {user ? (
            <div className="flex flex-col gap-4">
              <span className="text-sm font-medium text-gray-700">Logged in as {user.name}</span>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 text-maroon font-medium bg-red-50 py-2.5 rounded-lg w-full"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 mt-2">
              <Link
                to="/login"
                className="w-full text-center py-2.5 border border-gray-200 rounded-lg font-medium text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="w-full text-center py-2.5 bg-maroon text-white rounded-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
