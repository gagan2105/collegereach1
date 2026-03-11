import { useEffect, useRef } from "react";
import { mentorsContent } from "../data/content";

interface MentorsSectionProps {
  onReachMentors?: () => void;
}

export default function MentorsSection({ onReachMentors }: MentorsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered.current && onReachMentors) {
          triggered.current = true;
          onReachMentors();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [onReachMentors]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-maroon font-semibold text-sm uppercase tracking-wide mb-3">
              Learn From The Best
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
              Our Distinguished Mentors
            </h2>
          </div>
          <p className="text-gray-600 max-w-md">
            Industry veterans and leading researchers guiding you through every step of your academic journey.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mentorsContent.map((mentor, i) => (
            <div key={mentor.name} className="group relative overflow-hidden rounded-2xl bg-cream border border-gray-100 p-6 hover:shadow-xl transition-all">
              <div className="w-20 h-20 mb-6 mx-auto bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-sm">
                <img 
                  src={`https://i.pravatar.cc/150?img=${10 + i}`} 
                  alt={mentor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{mentor.name}</h3>
                <p className="text-maroon text-sm font-medium">{mentor.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
