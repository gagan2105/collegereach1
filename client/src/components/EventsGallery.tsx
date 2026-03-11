import { eventsGallery } from "../data/content";

export default function EventsGallery() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Life at EduReach</h2>
            <p className="text-gray-400 max-w-lg">From tech symposiums to cultural fests, there's always something happening on campus.</p>
          </div>
          <a href="#" className="hidden md:block text-maroon-light hover:text-white font-medium transition-colors">
            View All Events &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventsGallery.map((item: { title: string; image: string }) => (
            <div key={item.title} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent flex items-end">
                <div className="p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-xl">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <a href="#" className="mt-8 inline-block md:hidden text-maroon-light font-medium">
          View All Events &rarr;
        </a>
      </div>
    </section>
  );
}
