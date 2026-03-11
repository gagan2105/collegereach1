import { campusFeatures } from "../data/content";

export default function StudentLifeSection() {
  return (
    <section id="campus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-maroon font-semibold text-sm uppercase tracking-wide mb-3">
            Beyond the Classroom
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Campus Life & Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience a vibrant community with world-class amenities designed to support your growth inside and outside the classroom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {campusFeatures.map((feature) => (
            <div key={feature.title} className="group rounded-2xl overflow-hidden bg-cream shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="font-bold font-heading text-2xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
