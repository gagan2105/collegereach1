import { useState, useEffect } from "react";
import { quotesContent } from "../data/content";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function QuotesSection() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % quotesContent.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + quotesContent.length) % quotesContent.length);
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % quotesContent.length);
      setFade(true);
    }, 300);
  };

  return (
    <section className="py-20 bg-gray-900 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-maroon/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <Quote className="w-16 h-16 text-maroon/50 mx-auto mb-10" />
        
        <div className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
          <p className="text-2xl md:text-4xl text-white font-heading font-medium leading-relaxed mb-10">
            "{quotesContent[current].quote}"
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <img 
              src={quotesContent[current].avatar} 
              alt={quotesContent[current].author}
              className="w-14 h-14 rounded-full border-2 border-maroon object-cover"
            />
            <div className="text-left">
              <p className="text-white font-bold">{quotesContent[current].author}</p>
              <p className="text-gray-400 text-sm">{quotesContent[current].role}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-12">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-maroon hover:bg-maroon transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-maroon hover:bg-maroon transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
