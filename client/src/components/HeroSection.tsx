import { images, siteConfig } from "../data/content";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-[85vh] min-h-[500px]">
      <img src={images.hero} alt="EduReach Campus" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-maroon/70" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <p className="text-white/80 text-sm tracking-widest uppercase mb-4">
            {siteConfig.established}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white max-w-4xl leading-tight mb-6">
            {siteConfig.tagline}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed font-body">
            Equipping future leaders with the knowledge, skills, and network needed to succeed in an ever-changing world.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#courses"
              className="bg-white text-maroon hover:bg-gray-50 px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Explore Programs
            </a>
            <a
              href="#about"
              className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
