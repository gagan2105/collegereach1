import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchievementsSection";
import CoursesSection from "../components/CoursesSection";
import QuotesSection from "../components/QuotesSection";
import MentorsSection from "../components/MentorsSection";
import StudentLifeSection from "../components/StudentLifeSection";
import EventsGallery from "../components/EventsGallery";
import CounselorCTA from "../components/CounselorCTA";
import HiringStatsSection from "../components/HiringStatsSection";
import Footer from "../components/Footer";
import SignupPopup from "../components/SignupPopup";
import CallPopup from "../components/CallPopup";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

export default function HomePage() {
  const { user, loading } = useAuth();
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  const handleReachMentors = () => {
    if (!user && !hasShownPopup) {
      setShowSignupPopup(true);
      setHasShownPopup(true);
    }
  };

  if (loading) return null;

  return (
    <div className="min-h-screen bg-cream font-body antialiased">
      <Navbar />
      
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <CoursesSection />
        <QuotesSection />
        <MentorsSection onReachMentors={handleReachMentors} />

        {user ? (
          <>
            <StudentLifeSection />
            <EventsGallery />
            <CounselorCTA onOpenCall={() => setShowCallPopup(true)} />
            <HiringStatsSection />
          </>
        ) : (
          <section className="py-24 bg-gradient-to-b from-white to-cream border-t border-gray-100">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="w-16 h-16 bg-maroon/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-maroon" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
                Want to See More?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                Sign up to unlock detailed placement statistics, explore campus facilities, and access our AI guidance counselor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/signup"
                  className="bg-maroon hover:bg-maroon-light text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
                >
                  Create Free Account
                </Link>
                <Link
                  to="/login"
                  className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-3.5 rounded-xl font-bold transition-all"
                >
                  Log In
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />

      <SignupPopup 
        show={showSignupPopup} 
        onClose={() => setShowSignupPopup(false)} 
      />
      <CallPopup 
        open={showCallPopup} 
        onClose={() => setShowCallPopup(false)} 
      />
    </div>
  );
}
