import { aboutContent, images } from "../data/content";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative">
            <img
              src={images.collegeClassroom}
              alt="Classroom"
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 w-2/3 border-8 border-white rounded-2xl overflow-hidden z-20 shadow-xl hidden sm:block">
              <img src={images.campus1} alt="Campus view" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-maroon text-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-bold font-heading">20+</p>
              <p className="text-sm font-medium opacity-90">Years of<br />Excellence</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="md:pl-10 mt-10 md:mt-0">
            <p className="text-maroon font-semibold text-sm uppercase tracking-wide mb-3">About EduReach</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6 leading-tight">
              {aboutContent.heading}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {aboutContent.description}
            </p>
            <ul className="space-y-4 mb-8">
              {aboutContent.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-maroon/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 text-maroon font-semibold hover:text-maroon-light transition-colors group"
            >
              Discover our history
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
