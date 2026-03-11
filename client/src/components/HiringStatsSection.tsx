import { topRecruiters, deptPlacements } from "../data/content";
import { TrendingUp, Award } from "lucide-react";

export default function HiringStatsSection() {
  return (
    <section id="placements" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-maroon font-semibold text-sm uppercase tracking-wide mb-3">
            Where Our Students Go
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stellar Placement Records
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Department Stats */}
          <div className="space-y-6">
            {deptPlacements.map((dept) => (
              <div key={dept.dept} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-maroon/10 rounded-xl flex items-center justify-center text-maroon">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{dept.dept}</h4>
                    <p className="text-sm text-gray-500">Placement Rate: <span className="text-maroon font-bold">{dept.rate}</span></p>
                  </div>
                </div>
                
                <div className="sm:text-right pl-[64px] sm:pl-0">
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Avg Package</p>
                  <p className="font-bold text-2xl text-gray-900 font-heading">{dept.avg}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Recruiters */}
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
              <Award className="text-maroon w-8 h-8"/> 
              Top Recruiters
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {topRecruiters.map((company) => (
                <div key={company} className="h-20 bg-cream rounded-xl flex items-center justify-center p-4 border border-gray-100 hover:border-maroon/30 transition-colors cursor-default">
                  <span className="font-bold text-gray-400 text-lg sm:text-xl grayscale group-hover:grayscale-0 transition-all font-heading tracking-wide">
                    {company}
                  </span>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-center text-sm text-gray-500">
              And 200+ more Fortune 500 companies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
