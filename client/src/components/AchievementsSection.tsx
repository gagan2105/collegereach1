import { achievementsContent } from "../data/content";

export default function AchievementsSection() {
  return (
    <section className="bg-maroon py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievementsContent.stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className="text-4xl md:text-5xl font-bold text-white font-heading mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="text-white/80 font-medium text-sm md:text-base uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
