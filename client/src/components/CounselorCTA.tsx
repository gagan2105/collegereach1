import { useNavigate } from "react-router-dom";
import { images } from "../data/content";
import { PhoneCall } from "lucide-react";
import { useAuth } from "../context/AuthContext";

interface CounselorCTAProps {
  onOpenCall: () => void;
}

export default function CounselorCTA({ onOpenCall }: CounselorCTAProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAction = () => {
    if (user) {
      onOpenCall();
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-maroon">
      <div className="absolute inset-0 z-0">
        <img src={images.mentors} alt="Background" className="w-full h-full object-cover opacity-10" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20">
          <PhoneCall className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
          Need Guidance? Talk to Ava.
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Ava is our AI Counselor. She knows everything about EduReach admissions, courses, and fees. Request a call back in seconds.
        </p>
        
        <button 
          onClick={handleAction}
          className="bg-white text-maroon hover:bg-cream px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          Request Voice Call Now
        </button>
      </div>
    </section>
  );
}
