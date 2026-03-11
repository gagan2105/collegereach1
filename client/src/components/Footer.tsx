import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-maroon-light" />
              <span className="font-heading font-bold text-2xl tracking-tight">EduReach</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your comprehensive platform for education, mentorship, and career placement. Join our global community today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-100">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors text-sm">Academic Programs</a></li>
              <li><a href="#campus" className="text-gray-400 hover:text-white transition-colors text-sm">Campus Life</a></li>
              <li><a href="#placements" className="text-gray-400 hover:text-white transition-colors text-sm">Career Placements</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-100">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Student Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Financial Aid</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Library Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Alumni Network</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-100">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="text-gray-400 text-sm">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="text-gray-400 text-sm">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EduReach College. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
