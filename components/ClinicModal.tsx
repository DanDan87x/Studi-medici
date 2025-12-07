import React, { useEffect, useRef } from 'react';
import { X, Phone, Mail, MapPin, CheckCircle, Clock, Map, ChevronLeft } from 'lucide-react';
import { Clinic } from '../types';

interface ClinicModalProps {
  clinic: Clinic | null;
  onClose: () => void;
}

const ClinicModal: React.FC<ClinicModalProps> = ({ clinic, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!clinic) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center md:items-center p-0 md:p-8">
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
        onClick={onClose}
      ></div>
      
      <div 
        ref={modalRef}
        className="relative bg-white w-full h-full md:h-auto md:max-h-[90vh] md:max-w-6xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in slide-in-from-bottom-10 duration-500 border border-slate-200"
      >
        {/* Close Actions */}
        <button 
          onClick={onClose}
          className="absolute top-0 right-0 z-40 p-4 bg-white text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <X size={24} />
        </button>
        
        <button 
           onClick={onClose}
           className="absolute top-4 left-4 z-40 p-2 bg-white/80 text-slate-800 md:hidden backdrop-blur-md shadow-sm"
        >
           <ChevronLeft size={24} />
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-[40%] relative h-64 md:h-auto flex-shrink-0">
           <img 
             src={clinic.imageUrl} 
             alt={clinic.name} 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-slate-900/20"></div>
        </div>

        {/* Right Side: Info */}
        <div className="flex-1 flex flex-col min-h-0 bg-white">
           <div className="flex-1 overflow-y-auto p-6 sm:p-12">
              
              <div className="hidden md:block mb-8">
                 <span className="inline-block px-3 py-1 bg-teal-600 text-white text-xs font-bold uppercase tracking-widest mb-3">
                    {clinic.city}
                 </span>
                 <h2 className="text-4xl font-bold text-slate-900 leading-none tracking-tight">
                    {clinic.name}
                 </h2>
              </div>

              <div className="space-y-8 pb-24 md:pb-0">
                 {/* Main Details */}
                 <div className="grid grid-cols-1 gap-0 border border-slate-200">
                    <a 
                      href={clinic.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-6 p-6 border-b border-slate-200 hover:bg-slate-50 transition-all"
                    >
                        <div className="mt-1 text-teal-600 group-hover:text-teal-700">
                            <MapPin size={28} strokeWidth={1.5} />
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Indirizzo</p>
                            <p className="text-xl text-slate-900 font-medium leading-snug mb-2">{clinic.address}</p>
                            <span className="inline-flex items-center gap-2 text-teal-600 text-sm font-bold uppercase tracking-wide group-hover:underline decoration-2 underline-offset-4">
                                Apri Mappa <Map size={14} />
                            </span>
                        </div>
                    </a>

                    <div className="flex items-start gap-6 p-6 hover:bg-slate-50 transition-all">
                        <div className="mt-1 text-slate-400">
                            <Clock size={28} strokeWidth={1.5} />
                        </div>
                        <div>
                             <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Orari Apertura</p>
                             <ul className="text-slate-700 space-y-1 font-medium text-lg">
                                {clinic.hours.map((h, i) => <li key={i}>{h}</li>)}
                             </ul>
                        </div>
                    </div>
                 </div>

                 {/* Tags Grid */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                     <div>
                        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">
                           Specializzazioni
                        </h3>
                        <ul className="space-y-3">
                           {clinic.services.map((feat, idx) => (
                             <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                <div className="w-1.5 h-1.5 bg-teal-500"></div>
                                {feat}
                             </li>
                           ))}
                        </ul>
                     </div>

                     <div>
                        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">
                           Servizi Sede
                        </h3>
                        <ul className="space-y-3">
                           {clinic.features.map((feat, idx) => (
                             <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                <CheckCircle size={16} className="text-teal-500" />
                                {feat}
                             </li>
                           ))}
                        </ul>
                     </div>
                 </div>
              </div>
           </div>

           {/* Sticky Footer */}
           <div className="p-0 border-t border-slate-200 bg-white">
             <div className="flex h-16 md:h-20">
                <a 
                   href={`tel:${clinic.phone}`}
                   className="flex-1 flex items-center justify-center gap-3 bg-slate-900 hover:bg-teal-600 text-white font-bold uppercase tracking-widest transition-colors"
                >
                   <Phone size={20} />
                   Chiama
                </a>
                <a 
                   href={`mailto:${clinic.email}`}
                   className="flex-1 flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 font-bold uppercase tracking-widest transition-colors border-l border-slate-200"
                >
                   <Mail size={20} />
                   Email
                </a>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicModal;