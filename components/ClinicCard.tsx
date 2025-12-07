import React from 'react';
import { MapPin, ArrowUpRight, Phone, Info } from 'lucide-react';
import { ClinicProps } from '../types';

const ClinicCard: React.FC<ClinicProps> = ({ clinic, onSelect }) => {
  return (
    <div 
      className="group relative w-full h-full overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out isolate bg-slate-900"
    >
      {/* Clickable Area for Main Details */}
      <div className="absolute inset-0 z-0 cursor-pointer" onClick={() => onSelect(clinic)}>
          {/* Background Image */}
          <div className="absolute inset-0 bg-slate-800">
             <img 
               src={clinic.imageUrl} 
               alt={clinic.name} 
               className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-50"
             />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent"></div>

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 z-10 pointer-events-none">
             
             {/* Top: City Badge */}
             <div className="flex justify-between items-start">
                 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1.5 uppercase tracking-widest">
                    <MapPin size={12} className="text-teal-400" />
                    {clinic.city}
                </div>
             </div>

             {/* Bottom: Info */}
             <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-none mb-3 tracking-tight drop-shadow-lg">
                   {clinic.name}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed border-l-2 border-teal-500 pl-3">
                   {clinic.address}
                </p>
             </div>
          </div>
      </div>

      {/* HOVER ACTION BAR - Sticky at bottom on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex">
          
          {/* Action 1: Info (Open Modal) */}
          <button 
            onClick={() => onSelect(clinic)}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold uppercase tracking-widest transition-colors border-t border-slate-200"
          >
             <Info size={18} />
             Scheda
          </button>

          {/* Action 2: Direct Call (High Priority) */}
          <a 
            href={`tel:${clinic.phone}`}
            className="flex-1 flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-sm font-bold uppercase tracking-widest transition-colors"
          >
             <Phone size={18} fill="currentColor" />
             Chiama
          </a>
      </div>
      
      {/* Decorative Border */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none z-30"></div>
    </div>
  );
};

export default ClinicCard;