import { coursesContent } from "../data/content";
import { BookOpen, Users, Code, Briefcase, PenTool } from "lucide-react";

export default function CoursesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code": return <Code className="w-6 h-6 text-maroon" />;
      case "Briefcase": return <Briefcase className="w-6 h-6 text-maroon" />;
      case "PenTool": return <PenTool className="w-6 h-6 text-maroon" />;
      default: return <BookOpen className="w-6 h-6 text-maroon" />;
    }
  };

  return (
    <section id="courses" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-maroon font-semibold text-sm uppercase tracking-wide mb-3">
            World-Class Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Discover Our Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from industry-aligned courses designed to give you a competitive edge.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {coursesContent.map((course) => (
            <div key={course.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {getIcon(course.icon)}
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">{course.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed h-16">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <BookOpen className="w-4 h-4" /> {course.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <Users className="w-4 h-4" /> {course.students}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
