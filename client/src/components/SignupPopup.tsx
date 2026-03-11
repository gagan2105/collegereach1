import { Link } from "react-router-dom";
import { X, GraduationCap } from "lucide-react";
import { images } from "../data/content";

interface SignupPopupProps {
  show: boolean;
  onClose: () => void;
}

export default function SignupPopup({ show, onClose }: SignupPopupProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative z-10 animate-fade-in-up">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Section */}
        <div className="h-48 relative">
          <img 
            src={images.campus1} 
            alt="Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon to-maroon/20" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-7 h-7 text-maroon" />
            </div>
            <div>
              <p className="text-white/80 text-sm font-medium uppercase tracking-wider">Unlock Student Access</p>
              <h3 className="text-white font-bold font-heading text-2xl">Join EduReach</h3>
            </div>
          </div>
        </div>

        {/* Bottom Content Section */}
        <div className="p-8 text-center bg-cream">
          <p className="text-gray-600 mb-8 leading-relaxed max-w-sm mx-auto">
            Create a free account to view detailed placement statistics, explore campus facilities, and access our AI guidance counselor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup"
              className="px-8 py-3.5 bg-maroon hover:bg-maroon-light text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg flex-1"
            >
              Sign Up for Free
            </Link>
            <Link 
              to="/login"
              className="px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-xl font-bold transition-all flex-1"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
